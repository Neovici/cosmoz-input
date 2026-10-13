import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, userEvent, waitFor } from 'storybook/test';
import '../src/number-field';

const meta: Meta = {
	title: 'Tests/Number field',
};

export default meta;

type Story = StoryObj;
type Field = HTMLElementTagNameMap['cosmoz-number-field'];

const parts = (el: Field) => {
	const root = el.shadowRoot!;
	return {
		input: root.querySelector('input')!,
		dec: root.querySelector<HTMLButtonElement>('[part~=decrement]')!,
		inc: root.querySelector<HTMLButtonElement>('[part~=increment]')!,
	};
};

const field = (root: HTMLElement, selector = 'cosmoz-number-field') =>
	root.querySelector<Field>(selector)!;

const key = (el: Field, k: string, init: KeyboardEventInit = {}) =>
	parts(el).input.dispatchEvent(
		new KeyboardEvent('keydown', {
			key: k,
			bubbles: true,
			cancelable: true,
			composed: true,
			...init,
		}),
	);

const type = (el: Field, text: string) => {
	const { input } = parts(el);
	input.value = text;
	input.dispatchEvent(new InputEvent('input', { bubbles: true }));
};

const blur = (el: Field) =>
	parts(el).input.dispatchEvent(new FocusEvent('blur'));

const text = (el: Field) => parts(el).input.value;

const pointer = (
	target: EventTarget,
	type: string,
	init: PointerEventInit = {},
) =>
	target.dispatchEvent(
		new PointerEvent(type, {
			button: 0,
			bubbles: true,
			cancelable: true,
			composed: true,
			pointerType: 'mouse',
			...init,
		}),
	);

// a click that ends a pointer press has detail 1; .click() has detail 0
const pointerClick = (target: EventTarget) =>
	target.dispatchEvent(
		new MouseEvent('click', { detail: 1, bubbles: true, composed: true }),
	);

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const Aria: Story = {
	render: () => html`
		<cosmoz-number-field label="Quantity" .value=${1}></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		const { input, inc, dec } = parts(el);

		await step('a text input with decimal keypad, not type=number', () => {
			expect(input.type).toBe('text');
			expect(input.getAttribute('inputmode')).toBe('decimal');
			expect(input.getAttribute('autocomplete')).toBe('off');
			expect(input.getAttribute('spellcheck')).toBe('false');
		});

		await step('its role description is "Number field"', () => {
			expect(input.getAttribute('aria-roledescription')).toBe('Number field');
		});

		await step('the label names the input', () => {
			expect(input.labels?.[0]?.textContent?.trim()).toBe('Quantity');
		});

		await step('buttons are labelled, control the input, skip Tab', () => {
			expect(inc.getAttribute('aria-label')).toBe('Increase');
			expect(dec.getAttribute('aria-label')).toBe('Decrease');
			expect(inc.getAttribute('aria-controls')).toBe(input.id);
			expect(dec.getAttribute('aria-controls')).toBe(input.id);
			expect(inc.tabIndex).toBe(-1);
			expect(dec.tabIndex).toBe(-1);
			expect(inc.type).toBe('button');
		});

		await step('aria-invalid follows invalid', async () => {
			expect(input.hasAttribute('aria-invalid')).toBe(false);
			el.invalid = true;
			await waitFor(() =>
				expect(input.getAttribute('aria-invalid')).toBe('true'),
			);
		});

		await step('focus is delegated to the input', () => {
			el.focus();
			expect(el.shadowRoot!.activeElement).toBe(input);
		});
	},
};

export const HostStates: Story = {
	render: () => html`
		<cosmoz-number-field id="plain"></cosmoz-number-field>
		<cosmoz-number-field
			id="states"
			.value=${1}
			disabled
			readonly
			required
			invalid
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const plain = field(canvasElement, '#plain'),
			states = field(canvasElement, '#states'),
			names = [
				'data-disabled',
				'data-readonly',
				'data-required',
				'data-invalid',
				'has-value',
			];

		await step('no state attributes by default', async () => {
			await waitFor(() => expect(parts(plain).input).toBeTruthy());
			names.forEach((n) => expect(plain.hasAttribute(n)).toBe(false));
		});

		await step('each state is reflected on the host', async () => {
			await waitFor(() =>
				names.forEach((n) => expect(states.hasAttribute(n)).toBe(true)),
			);
		});
	},
};

export const Keyboard: Story = {
	render: () => html`
		<cosmoz-number-field
			.value=${50}
			min="0"
			max="100"
			step="2"
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());

		await step('ArrowUp/ArrowDown step by step', () => {
			key(el, 'ArrowUp');
			expect(el.value).toBe(52);
			key(el, 'ArrowDown');
			key(el, 'ArrowDown');
			expect(el.value).toBe(48);
		});

		await step('Shift steps by largeStep (10 × step)', () => {
			key(el, 'ArrowUp', { shiftKey: true });
			expect(el.value).toBe(68);
			key(el, 'ArrowDown', { shiftKey: true });
			expect(el.value).toBe(48);
		});

		await step('Alt steps by smallStep (0.1 × step)', () => {
			key(el, 'ArrowUp', { altKey: true });
			expect(el.value).toBe(48.2);
			key(el, 'ArrowDown', { altKey: true });
			expect(el.value).toBe(48);
		});

		await step('PageUp/PageDown step by largeStep', () => {
			key(el, 'PageUp');
			expect(el.value).toBe(68);
			key(el, 'PageDown');
			expect(el.value).toBe(48);
		});

		await step('Home/End go to min/max', () => {
			expect(key(el, 'End')).toBe(false);
			expect(el.value).toBe(100);
			key(el, 'Home');
			expect(el.value).toBe(0);
		});

		await step('stepping stops at min and max', () => {
			key(el, 'ArrowDown');
			expect(el.value).toBe(0);
			key(el, 'End');
			key(el, 'PageUp');
			expect(el.value).toBe(100);
		});

		await step('the field shows the stepped value', async () => {
			await waitFor(() => expect(text(el)).toBe('100'));
		});

		await step('explicit largeStep and smallStep', async () => {
			el.largeStep = 25;
			el.smallStep = 0.5;
			await sleep(50);
			key(el, 'Home');
			key(el, 'ArrowUp', { shiftKey: true });
			expect(el.value).toBe(25);
			key(el, 'ArrowUp', { altKey: true });
			expect(el.value).toBe(25.5);
		});
	},
};

export const KeyboardEdgeCases: Story = {
	render: () => html`
		<cosmoz-number-field id="empty"></cosmoz-number-field>
		<cosmoz-number-field id="from-min" min="5"></cosmoz-number-field>
		<cosmoz-number-field
			id="float"
			.value=${0.1}
			step="0.1"
		></cosmoz-number-field>
		<cosmoz-number-field id="unbounded" .value=${3}></cosmoz-number-field>
		<cosmoz-number-field
			id="readonly"
			.value=${3}
			readonly
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const get = (id: string) => field(canvasElement, `#${id}`);
		await waitFor(() => expect(parts(get('readonly')).input).toBeTruthy());

		await step('stepping an empty field starts at 0', () => {
			key(get('empty'), 'ArrowDown');
			expect(get('empty').value).toBe(0);
		});

		await step('... clamped to min', () => {
			key(get('from-min'), 'ArrowUp');
			expect(get('from-min').value).toBe(5);
		});

		await step('stepping leaves no floating point noise', () => {
			key(get('float'), 'ArrowUp');
			key(get('float'), 'ArrowUp');
			expect(get('float').value).toBe(0.3);
		});

		await step('Home/End do nothing without min/max', () => {
			expect(key(get('unbounded'), 'Home')).toBe(true);
			expect(key(get('unbounded'), 'End')).toBe(true);
			expect(get('unbounded').value).toBe(3);
		});

		await step('other keys keep their default', () => {
			expect(key(get('unbounded'), 'ArrowLeft')).toBe(true);
			expect(key(get('unbounded'), '5')).toBe(true);
		});

		await step('steps from the typed text', () => {
			type(get('unbounded'), '7');
			key(get('unbounded'), 'ArrowUp');
			expect(get('unbounded').value).toBe(8);
		});

		await step('steps from the committed value, not clamped text', async () => {
			const el = get('from-min');
			el.max = 10;
			await sleep(50);
			type(el, '150');
			expect(el.value).toBe(10);
			key(el, 'ArrowDown');
			expect(el.value).toBe(9);
		});

		await step('keys during IME composition are left alone', () => {
			expect(key(get('unbounded'), 'ArrowUp', { isComposing: true })).toBe(
				true,
			);
			expect(get('unbounded').value).toBe(8);
		});

		await step('a read-only field ignores the keys', () => {
			key(get('readonly'), 'ArrowUp');
			key(get('readonly'), 'End');
			expect(get('readonly').value).toBe(3);
		});
	},
};

export const Buttons: Story = {
	render: () => html`
		<cosmoz-number-field .value=${1} min="0" max="3"></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());

		await step('click steps once (keyboard, screen readers)', () => {
			parts(el).inc.click();
			expect(el.value).toBe(2);
			parts(el).dec.click();
			expect(el.value).toBe(1);
		});

		await step('a mouse press steps once, its click is skipped', () => {
			const { inc } = parts(el);
			pointer(inc, 'pointerdown');
			pointer(window, 'pointerup');
			pointerClick(inc);
			expect(el.value).toBe(2);
		});

		await step('a press released off the button skips no later click', () => {
			const { dec } = parts(el);
			pointer(dec, 'pointerdown');
			pointer(window, 'pointerup');
			expect(el.value).toBe(1);
			dec.click();
			expect(el.value).toBe(0);
			parts(el).inc.click();
			parts(el).inc.click();
			expect(el.value).toBe(2);
		});

		await step('a mouse press focuses the input', () => {
			expect(el.shadowRoot!.activeElement).toBe(parts(el).input);
		});

		await step('the button at a boundary is disabled', async () => {
			parts(el).inc.click();
			expect(el.value).toBe(3);
			await waitFor(() => expect(parts(el).inc.disabled).toBe(true));
			expect(parts(el).dec.disabled).toBe(false);
			el.value = 0;
			await waitFor(() => expect(parts(el).dec.disabled).toBe(true));
		});

		await step('Shift+click steps by largeStep', async () => {
			el.max = 100;
			await sleep(50);
			parts(el).inc.dispatchEvent(
				new MouseEvent('click', { shiftKey: true, bubbles: true }),
			);
			expect(el.value).toBe(10);
		});
	},
};

export const PressAndHold: Story = {
	render: () => html`
		<cosmoz-number-field .value=${0} max="5"></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());

		await step('holding repeats after a delay', async () => {
			pointer(parts(el).inc, 'pointerdown');
			expect(el.value).toBe(1);
			await sleep(300);
			expect(el.value).toBe(1);
			await sleep(250);
			expect(el.value).toBeGreaterThan(1);
		});

		await step('repeating stops at max', async () => {
			await sleep(400);
			expect(el.value).toBe(5);
		});

		await step('releasing stops it', async () => {
			el.value = 0;
			await waitFor(() => expect(parts(el).inc.disabled).toBe(false));
			pointer(parts(el).inc, 'pointerdown');
			pointer(window, 'pointerup');
			await sleep(600);
			expect(el.value).toBe(1);
		});
	},
};

export const Touch: Story = {
	render: () => html`<cosmoz-number-field .value=${0}></cosmoz-number-field>`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		const touch = { pointerType: 'touch', clientX: 10, clientY: 10 };

		await step('a quick tap steps once', async () => {
			const { inc } = parts(el);
			pointer(inc, 'pointerdown', touch);
			pointer(inc, 'pointerup', touch);
			pointer(window, 'pointerup', touch);
			pointerClick(inc);
			await sleep(100);
			expect(el.value).toBe(1);
		});

		await step('a touch press holds after a short delay', async () => {
			const { inc } = parts(el);
			pointer(inc, 'pointerdown', touch);
			expect(el.value).toBe(1);
			await sleep(80);
			expect(el.value).toBe(2);
			pointer(window, 'pointerup', touch);
			pointerClick(inc);
			expect(el.value).toBe(2);
		});

		await step('a touch press that moves is a scroll', async () => {
			const { inc } = parts(el);
			pointer(inc, 'pointerdown', touch);
			pointer(inc, 'pointermove', { ...touch, clientY: 40 });
			await sleep(100);
			expect(el.value).toBe(2);
		});

		await step('a touch press leaves focus alone', () => {
			expect(el.shadowRoot!.activeElement).toBe(null);
		});
	},
};

export const Typing: Story = {
	render: () => html`
		<cosmoz-number-field
			.value=${5}
			min="1"
			max="10"
			locale="en-US"
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		const changes = fn();
		el.addEventListener('value-changed', (e) =>
			changes((e as CustomEvent<{ value: number }>).detail.value),
		);

		await step('the value follows the typed text', () => {
			type(el, '7');
			expect(el.value).toBe(7);
			expect(changes).toHaveBeenLastCalledWith(7);
		});

		await step('out of range input is clamped, the text kept', async () => {
			type(el, '42');
			expect(el.value).toBe(10);
			await sleep(50);
			expect(text(el)).toBe('42');
		});

		await step('blur shows the clamped value', async () => {
			blur(el);
			await waitFor(() => expect(text(el)).toBe('10'));
		});

		await step('Enter shows the committed value', async () => {
			type(el, '0');
			key(el, 'Enter');
			await waitFor(() => expect(text(el)).toBe('1'));
			expect(el.value).toBe(1);
		});

		await step('clearing the text clears the value', async () => {
			type(el, '');
			expect(el.value).toBe(null);
			blur(el);
			await waitFor(() => expect(text(el)).toBe(''));
		});

		await step('text that is not a number reverts on blur', async () => {
			el.value = 4;
			await waitFor(() => expect(text(el)).toBe('4'));
			type(el, '-');
			blur(el);
			await waitFor(() => expect(text(el)).toBe('4'));
			expect(el.value).toBe(4);
		});

		await step('real typing', async () => {
			parts(el).input.focus();
			parts(el).input.select();
			await userEvent.keyboard('8');
			expect(el.value).toBe(8);
		});
	},
};

export const InputFilter: Story = {
	render: () => html`
		<cosmoz-number-field
			id="positive"
			min="0"
			locale="en-US"
		></cosmoz-number-field>
		<cosmoz-number-field id="any" locale="sv-SE"></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const beforeInput = (id: string, data: string) =>
			parts(field(canvasElement, `#${id}`)).input.dispatchEvent(
				new InputEvent('beforeinput', {
					data,
					inputType: 'insertText',
					cancelable: true,
				}),
			);
		await waitFor(() =>
			expect(parts(field(canvasElement, '#any')).input).toBeTruthy(),
		);

		await step('digits and separators are allowed', () => {
			expect(beforeInput('positive', '1')).toBe(true);
			expect(beforeInput('positive', '.')).toBe(true);
			expect(beforeInput('positive', '1,234.5')).toBe(true);
			expect(beforeInput('any', '1 234,5')).toBe(true);
		});

		await step('letters are blocked', () => {
			expect(beforeInput('positive', 'a')).toBe(false);
			expect(beforeInput('positive', '1e5')).toBe(false);
		});

		await step('minus only where negative values are allowed', () => {
			expect(beforeInput('positive', '-')).toBe(false);
			expect(beforeInput('any', '-')).toBe(true);
			expect(beforeInput('any', '−')).toBe(true);
		});
	},
};

export const Formatting: Story = {
	render: () => html`
		<cosmoz-number-field
			id="en"
			locale="en-US"
			.value=${1234.5}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="sv"
			locale="sv-SE"
			.value=${-1234.5}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="currency"
			locale="en-US"
			.format=${{ style: 'currency', currency: 'EUR' }}
			.value=${1234.5}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="percent"
			locale="en-US"
			.format=${{ style: 'percent' }}
			.value=${0.25}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="rounded"
			locale="en-US"
			.format=${{ maximumFractionDigits: 2 }}
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const get = (id: string) => field(canvasElement, `#${id}`);
		const intl = (
			n: number,
			locale: string,
			format?: Intl.NumberFormatOptions,
		) => new Intl.NumberFormat(locale, format).format(n);
		await waitFor(() => expect(parts(get('percent')).input).toBeTruthy());

		await step('formats for the locale', () => {
			expect(text(get('en'))).toBe('1,234.5');
			expect(text(get('sv'))).toBe(intl(-1234.5, 'sv-SE'));
		});

		await step('formats with the format option', () => {
			expect(text(get('currency'))).toBe('€1,234.50');
			expect(text(get('percent'))).toBe('25%');
		});

		await step('re-formats typed text on blur', async () => {
			type(get('en'), '9876.5');
			expect(get('en').value).toBe(9876.5);
			blur(get('en'));
			await waitFor(() => expect(text(get('en'))).toBe('9,876.5'));
		});

		await step(
			'rounds to the format on blur when it sets rounding',
			async () => {
				const el = get('rounded');
				type(el, '1.23456');
				expect(el.value).toBe(1.23456);
				blur(el);
				await waitFor(() => expect(text(el)).toBe('1.23'));
				expect(el.value).toBe(1.23);
			},
		);

		await step('stepping keeps the format', async () => {
			key(get('currency'), 'ArrowUp');
			await waitFor(() => expect(text(get('currency'))).toBe('€1,235.50'));
		});
	},
};

export const Parsing: Story = {
	render: () => html`
		<cosmoz-number-field id="en" locale="en-US"></cosmoz-number-field>
		<cosmoz-number-field id="sv" locale="sv-SE"></cosmoz-number-field>
		<cosmoz-number-field id="de" locale="de-DE"></cosmoz-number-field>
		<cosmoz-number-field
			id="currency"
			locale="sv-SE"
			.format=${{ style: 'currency', currency: 'SEK' }}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="percent"
			locale="en-US"
			.format=${{ style: 'percent' }}
		></cosmoz-number-field>
		<cosmoz-number-field
			id="accounting"
			locale="en-US"
			.format=${{
				style: 'currency',
				currency: 'USD',
				currencySign: 'accounting',
			}}
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement, step }) => {
		const parsed = (id: string, input: string) => {
			const el = field(canvasElement, `#${id}`);
			type(el, input);
			return el.value;
		};
		await waitFor(() =>
			expect(parts(field(canvasElement, '#percent')).input).toBeTruthy(),
		);

		await step('group and decimal separators of the locale', () => {
			expect(parsed('en', '1,234.5')).toBe(1234.5);
			expect(parsed('sv', '1 234,5')).toBe(1234.5);
			expect(parsed('sv', '1 234,5')).toBe(1234.5);
			expect(parsed('de', '1.234,5')).toBe(1234.5);
		});

		await step('a dot is a decimal point where it is not the group', () => {
			expect(parsed('sv', '1.5')).toBe(1.5);
		});

		await step('Unicode and trailing minus signs', () => {
			expect(parsed('sv', '−3,5')).toBe(-3.5);
			expect(parsed('en', '-2')).toBe(-2);
			expect(parsed('en', '2-')).toBe(-2);
		});

		await step('currency and percent signs', () => {
			expect(parsed('currency', '1 234,50 kr')).toBe(1234.5);
			expect(parsed('percent', '50%')).toBe(0.5);
			expect(parsed('percent', '12.5')).toBe(0.125);
		});

		await step('accounting negatives in parentheses', () => {
			expect(parsed('accounting', '($1,234.50)')).toBe(-1234.5);
		});

		await step('full-width digits', () => {
			expect(parsed('en', '１２')).toBe(12);
		});

		await step('text that is not a number keeps the last value', () => {
			parsed('en', '-2');
			expect(parsed('en', '1.2.3-4')).toBe(-2);
		});
	},
};

export const Form: Story = {
	render: () => html`
		<form>
			<fieldset>
				<cosmoz-number-field
					name="amount"
					locale="en-US"
					max="10000"
					.value=${1234.5}
				></cosmoz-number-field>
			</fieldset>
		</form>
	`,
	play: async ({ canvasElement, step }) => {
		const form = canvasElement.querySelector('form')!,
			el = field(canvasElement),
			submitted = () => [...new FormData(form).entries()];
		await waitFor(() => expect(parts(el).input).toBeTruthy());

		await step('submits the unformatted number', async () => {
			expect(text(el)).toBe('1,234.5');
			await waitFor(() => expect(submitted()).toEqual([['amount', '1234.5']]));
		});

		await step('the submitted value follows the field', async () => {
			key(el, 'ArrowUp');
			await waitFor(() => expect(submitted()).toEqual([['amount', '1235.5']]));
		});

		await step('an empty field submits nothing', async () => {
			el.value = null;
			await waitFor(() => expect(submitted()).toEqual([]));
		});

		await step('required makes an empty field invalid', async () => {
			el.required = true;
			await waitFor(() => expect(el.validity.valueMissing).toBe(true));
			expect(form.checkValidity()).toBe(false);
			el.value = 1;
			await waitFor(() => expect(el.checkValidity()).toBe(true));
		});

		await step('a value out of range is invalid', async () => {
			el.value = 20000;
			await waitFor(() => expect(el.validity.rangeOverflow).toBe(true));
			expect(el.validationMessage).not.toBe('');
		});

		await step('reset restores the initial value', async () => {
			form.reset();
			expect(el.value).toBe(1234.5);
			await waitFor(() => expect(text(el)).toBe('1,234.5'));
		});

		await step('a disabled fieldset disables the field', async () => {
			form.querySelector('fieldset')!.disabled = true;
			await waitFor(() => expect(el.hasAttribute('data-disabled')).toBe(true));
			expect(parts(el).input.disabled).toBe(true);
			expect(parts(el).inc.disabled).toBe(true);
			expect(submitted()).toEqual([]);
		});
	},
};

export const ResetToAttribute: Story = {
	render: () => html`
		<form><cosmoz-number-field value="3"></cosmoz-number-field></form>
	`,
	play: async ({ canvasElement }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		el.setAttribute('value', '6');
		el.value = 9;
		canvasElement.querySelector('form')!.reset();
		expect(el.value).toBe(6);
	},
};

export const Attributes: Story = {
	render: () => html`
		<cosmoz-number-field
			value="5"
			min="0"
			max="8"
			step="3"
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		expect(text(el)).toBe('5');
		key(el, 'ArrowUp');
		expect(el.value).toBe(8);
	},
};

export const Controlled: Story = {
	render: () => html`
		<cosmoz-number-field
			.value=${1}
			@value-changed=${(e: Event) => e.preventDefault()}
		></cosmoz-number-field>
	`,
	play: async ({ canvasElement }) => {
		const el = field(canvasElement);
		await waitFor(() => expect(parts(el).input).toBeTruthy());
		key(el, 'ArrowUp');
		expect(el.value).toBe(1);
		await waitFor(() => expect(text(el)).toBe('1'));
	},
};
