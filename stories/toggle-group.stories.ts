import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import { toggleGroup } from '../src/toggle-group';
import './style';

const meta: Meta = {
	title: 'Components/Toggle group',
	component: 'cosmoz-toggle-group',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const options = ['today', 'week', 'month'];

const radio = (el: Element, position: number) =>
	el.shadowRoot!.querySelectorAll('[part~=option]')[position] as HTMLElement;

const selected = (el: Element) =>
	el.shadowRoot!.querySelector('[part~=selected-option]') as HTMLElement;

export const Basic: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${options}
			.value=${'week'}
			.label=${'Range'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-toggle-group')!;
		await step('renders radiogroup with radio options', async () => {
			await waitFor(() => {
				expect(el.shadowRoot!.querySelector('[role=radiogroup]')).toBeTruthy();
				expect(el.shadowRoot!.querySelectorAll('[role=radio]').length).toBe(3);
			});
		});
		await step('the value reports aria-checked', async () => {
			expect(radio(el, 1).getAttribute('aria-checked')).toBe('true');
			expect(radio(el, 0).getAttribute('aria-checked')).toBe('false');
		});
		await step('the selected option is the one tab stop', async () => {
			expect(radio(el, 1).getAttribute('tabindex')).toBe('0');
			expect(radio(el, 0).getAttribute('tabindex')).toBe('-1');
			expect(radio(el, 2).getAttribute('tabindex')).toBe('-1');
		});
	},
};

export const Disabled: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${options}
			.value=${'today'}
			disabled
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector('cosmoz-toggle-group')!;
		await waitFor(() => {
			el.shadowRoot!.querySelectorAll('[role=radio]').forEach((radio) =>
				expect((radio as HTMLButtonElement).disabled).toBe(true),
			);
		});
	},
};

export const PerOptionDisabled: Story = {
	render: () => html`
		<cosmoz-toggle-group
			.options=${['a', { value: 'b', disabled: true }, 'c']}
			.value=${'a'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector('cosmoz-toggle-group')!;
		await waitFor(() => {
			expect((radio(el, 1) as HTMLButtonElement).disabled).toBe(true);
			expect((radio(el, 0) as HTMLButtonElement).disabled).toBe(false);
		});
	},
};

export const VetoableSelection: Story = {
	render: () => html`
		<cosmoz-toggle-group
			id="veto-group"
			.options=${options}
			.value=${'today'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('#veto-group')!;
		let vetoes = true;
		const veto = (e: Event) => {
			if (vetoes) {
				e.preventDefault();
			}
		};
		await step('preventDefault() keeps the current value', async () => {
			el.addEventListener('value-changed', veto);
			radio(el, 2).click();
			vetoes = false;
			await waitFor(() => {
				expect(el.value as string).toBe('today');
				expect(selected(el).textContent?.trim()).toBe('today');
				expect(radio(el, 2).getAttribute('aria-checked')).toBe('false');
			});
		});
		await step('a plain click commits', async () => {
			// controlled: the consumer writes the committed value back
			el.addEventListener('change', (e) => {
				el.value = (e as CustomEvent<string>).detail;
			});
			radio(el, 2).click();
			await waitFor(() =>
				expect(selected(el).textContent?.trim()).toBe('month'),
			);
		});
	},
};

export const Icons: Story = {
	render: () => html`
		<cosmoz-toggle-group
			id="icon-group"
			.options=${[
				{ value: 'explorer', icon: () => html`◆`, title: 'Diagram' },
				{ value: 'table', icon: () => html`▦`, label: 'Table' },
			]}
			.value=${'explorer'}
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector('#icon-group')!;
		await waitFor(() => {
			const explorer = radio(el, 0);
			// a string option with no label names itself
			expect(explorer.getAttribute('title')).toBe('Diagram');
			expect(explorer.textContent?.trim()).toBe('◆explorer');
			expect(radio(el, 1).textContent?.trim()).toBe('▦Table');
		});
	},
};

export const TypedHelper: Story = {
	render: () => {
		const picked = { id: 1, label: 'One' };
		return html`${toggleGroup({
			options: [
				{ value: picked, label: ({ label }) => label },
				{ value: { id: 2, label: 'Two' }, label: ({ label }) => label },
			],
			value: picked,
			valueProperty: 'id',
			label: 'Helper',
			onValueChanged: (event) => event.detail.value,
		})}`;
	},
	play: async ({ canvasElement }) => {
		const el = canvasElement.querySelector('cosmoz-toggle-group')!;
		await waitFor(() => {
			expect(
				el.shadowRoot!.querySelector('[part~=selected-option]')!.textContent,
			).toContain('One');
		});
	},
};

export const IdentitySelection: Story = {
	render: () => html`
		<cosmoz-toggle-group
			id="identity-group"
			.options=${[
				{ value: { id: 1, label: 'One' }, label: ({ label }) => label },
				{ value: { id: 2, label: 'Two' }, label: ({ label }) => label },
			]}
			.value=${{ id: 2, label: 'Two' }}
			value-property="id"
		></cosmoz-toggle-group>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('#identity-group')!;

		await step('marks the picked object', async () => {
			await waitFor(() => {
				expect(radio(el, 1).getAttribute('aria-checked')).toBe('true');
			});
		});

		await step('the pick commits the object itself', async () => {
			el.addEventListener('change', (e) => {
				el.value = (e as CustomEvent).detail;
			});
			radio(el, 0).click();
			await waitFor(() =>
				expect(el.value as { id: number }).toEqual({ id: 1, label: 'One' }),
			);
		});
	},
};
