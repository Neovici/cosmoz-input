import { useEffect, useMemo } from '@pionjs/pion';

type Direction = 1 | -1;
type Step = (direction: Direction, e: MouseEvent) => boolean;

interface Press {
	timer?: ReturnType<typeof setTimeout>;
	release?: () => void;
	pressed?: boolean;
	moves?: number;
	skipClick?: Direction;
	x?: number;
	y?: number;
	step?: Step;
}

const REPEAT_DELAY = 400,
	REPEAT_INTERVAL = 60,
	TOUCH_DELAY = 50,
	SCROLL_DISTANCE = 8,
	MAX_TOUCH_MOVES = 3;

/**
 * Base UI's press and hold for the stepper buttons: one step at once, then
 * repeating while held. `step` returns false at a boundary, which stops it.
 * Clicks without a press (keyboard, screen readers, quick taps) step once.
 * A mouse press calls `focus` and keeps focus off the button; a touch press
 * leaves focus alone, so the on-screen keyboard stays down.
 */
export const usePressAndHold = (
	step: Step,
	inert: boolean,
	focus: () => void,
) => {
	// timers outlive renders, so they call the latest step
	const press = useMemo<Press>(() => ({}), []);
	press.step = step;

	const stop = () => {
			clearTimeout(press.timer);
			press.release?.();
			press.release = undefined;
		},
		hold = (direction: Direction, e: PointerEvent) => {
			stop();
			const onContextMenu = (ev: Event) => ev.preventDefault();
			// a long press on touch would open the context menu
			window.addEventListener('contextmenu', onContextMenu);
			window.addEventListener('pointerup', stop);
			window.addEventListener('pointercancel', stop);
			press.release = () => {
				window.removeEventListener('contextmenu', onContextMenu);
				window.removeEventListener('pointerup', stop);
				window.removeEventListener('pointercancel', stop);
			};
			const tick = () => press.step!(direction, e),
				loop = (delay: number) =>
					(press.timer = setTimeout(
						() => (tick() ? loop(REPEAT_INTERVAL) : stop()),
						delay,
					));
			if (tick()) loop(REPEAT_DELAY);
			else stop();
		};

	useEffect(() => stop, []);

	return (direction: Direction) => ({
		onPointerDown: (e: PointerEvent) => {
			if (e.button !== 0 || inert) return;
			press.skipClick = undefined;
			if (e.pointerType === 'mouse') {
				e.preventDefault();
				focus();
				press.skipClick = direction;
				return hold(direction, e);
			}
			// touch and pen: wait to tell a press from a scroll; a quick tap
			// is handled by click
			Object.assign(press, {
				pressed: true,
				moves: 0,
				x: e.clientX,
				y: e.clientY,
			});
			clearTimeout(press.timer);
			press.timer = setTimeout(() => {
				if (!press.pressed || press.moves! >= MAX_TOUCH_MOVES) return;
				press.skipClick = direction;
				hold(direction, e);
			}, TOUCH_DELAY);
		},
		onPointerMove: (e: PointerEvent) => {
			press.moves = (press.moves ?? 0) + 1;
			const moved =
				Math.hypot(e.clientX - press.x!, e.clientY - press.y!) >
				SCROLL_DISTANCE;
			if (press.pressed && moved) {
				press.pressed = false;
				stop();
			}
		},
		onPointerUp: () => (press.pressed = false),
		// the click that ends a press already stepped; clicks with no pointer
		// (detail 0: keyboard, screen readers) always step
		onClick: (e: MouseEvent) => {
			if (press.skipClick === direction && e.detail > 0) {
				press.skipClick = undefined;
				return;
			}
			if (!inert) press.step!(direction, e);
		},
	});
};
