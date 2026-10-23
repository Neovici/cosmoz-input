import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/toggle-group';

const meta: Meta = {
	title: 'Tests/Toggle group',
};

export default meta;

type Story = StoryObj;

type Group = HTMLElement & { value?: unknown };

const radios = (el: Element) =>
	Array.from(el.shadowRoot!.querySelectorAll<HTMLElement>('[role=radio]'));

const press = (target: HTMLElement, key: string) =>
	target.dispatchEvent(
		new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }),
	);

const tabStops = (el: Element) =>
	radios(el).map((r) => r.getAttribute('tabindex'));

const focused = (el: Element) => el.shadowRoot!.activeElement;

export const NoValue: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${['today', 'week', 'month']}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await step('the first option is the tab stop', async () => {
			await waitFor(() => expect(tabStops(el)).toEqual(['0', '-1', '-1']));
		});
		await step('ArrowRight from nothing selects the first option', async () => {
			radios(el)[0].focus();
			press(radios(el)[0], 'ArrowRight');
			await waitFor(() => expect(el.value).toBe('today'));
			expect(focused(el)).toBe(radios(el)[0]);
		});
	},
};

export const NoValueArrowLeft: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${['today', 'week', 'month']}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await waitFor(() => expect(radios(el).length).toBe(3));
		radios(el)[0].focus();
		press(radios(el)[0], 'ArrowLeft');
		await waitFor(() => expect(el.value).toBe('month'));
		expect(focused(el)).toBe(radios(el)[2]);
	},
};

export const SkipsDisabled: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${[
				{ value: 'a' },
				{ value: 'b', disabled: true },
				{ value: 'c' },
				{ value: 'd', disabled: true },
			]}
			.value=${'a'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await waitFor(() => expect(radios(el).length).toBe(4));
		await step('ArrowRight jumps over a disabled option', async () => {
			radios(el)[0].focus();
			press(radios(el)[0], 'ArrowRight');
			await waitFor(() => expect(el.value).toBe('c'));
			expect(focused(el)).toBe(radios(el)[2]);
		});
		await step('and wraps past a disabled last option', async () => {
			press(radios(el)[2], 'ArrowRight');
			await waitFor(() => expect(el.value).toBe('a'));
			expect(focused(el)).toBe(radios(el)[0]);
		});
	},
};

export const DisabledFirstIsNotTheTabStop: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${[{ value: 'a', disabled: true }, { value: 'b' }]}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await waitFor(() => expect(tabStops(el)).toEqual(['-1', '0']));
	},
};

export const UpAndDown: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${['today', 'week', 'month']}
			.value=${'week'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await waitFor(() => expect(radios(el).length).toBe(3));
		await step('ArrowDown moves forward', async () => {
			radios(el)[1].focus();
			press(radios(el)[1], 'ArrowDown');
			await waitFor(() => expect(el.value).toBe('month'));
		});
		await step('ArrowUp moves back', async () => {
			press(radios(el)[2], 'ArrowUp');
			await waitFor(() => expect(el.value).toBe('week'));
		});
	},
};

export const Naming: Story = {
	render: () => html`
		<cosmoz-toggle-group
			id="unnamed"
			.options=${['a', 'b']}
		></cosmoz-toggle-group>
		<cosmoz-toggle-group
			id="icons"
			.label=${'View'}
			.options=${[
				{
					value: 'list',
					label: '',
					title: 'List',
					icon: () => html`<svg width="16" height="16"></svg>`,
				},
			]}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		await step('no empty aria-label when label is unset', async () => {
			const el = canvasElement.querySelector('#unnamed')!;
			await waitFor(() => {
				const group = el.shadowRoot!.querySelector('[role=radiogroup]')!;
				expect(group.hasAttribute('aria-label')).toBe(false);
			});
		});
		await step('an icon-only option is named by its title', async () => {
			const el = canvasElement.querySelector('#icons')!;
			await waitFor(() =>
				expect(radios(el)[0].getAttribute('aria-label')).toBe('List'),
			);
		});
	},
};

export const Clearable: Story = {
	render: () => html`
		<cosmoz-toggle-group
			clearable
			.options=${['missing', 'damaged']}
			.value=${'damaged'}
		></cosmoz-toggle-group>
		<cosmoz-toggle-group
			id="required"
			.options=${['missing', 'damaged']}
			.value=${'damaged'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const [clearable, required] = Array.from(
			canvasElement.querySelectorAll<Group>('cosmoz-toggle-group'),
		);
		await step('picking the selected option again clears it', async () => {
			radios(clearable)[1].click();
			await waitFor(() => expect(clearable.value).toBeUndefined());
			radios(clearable)[0].click();
			await waitFor(() => expect(clearable.value).toBe('missing'));
		});
		await step('without clearable the selection stays', async () => {
			radios(required)[1].click();
			await waitFor(() => expect(required.value).toBe('damaged'));
		});
	},
};

export const Stretch: Story = {
	render: () => html`
		<div style="width: 400px">
			<cosmoz-toggle-group stretch .options=${['a', 'b']}></cosmoz-toggle-group>
		</div>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector<Group>('cosmoz-toggle-group')!;
		await step('the group and its options fill the width', async () => {
			await waitFor(() => expect(radios(el)).toHaveLength(2));
			expect(el.getBoundingClientRect().width).toBe(400);
			const [a, b] = radios(el).map((r) => r.getBoundingClientRect().width);
			expect(Math.abs(a - b)).toBeLessThan(1);
			expect(a).toBeGreaterThan(150);
		});
	},
};
