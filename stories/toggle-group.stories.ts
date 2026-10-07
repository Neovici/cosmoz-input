import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/toggle-group';
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
		<link
			rel="stylesheet"
			href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
		/>
		<style>
			:host {
				font-family: 'Inter', sans-serif;
				color: var(--cz-color-text-primary);
				background: var(--cz-color-bg-primary);
			}
		</style>
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
			await new Promise((r) => setTimeout(r, 50));
			vetoes = false;
			expect(el.value as string).toBe('today');
			expect(selected(el).textContent?.trim()).toBe('today');
			expect(radio(el, 2).getAttribute('aria-checked')).toBe('false');
		});
		await step('a plain click commits', async () => {
			// controlled component: the consumer writes the committed value
			// back (property; the container re-renders)
			el.addEventListener('change', (e) => {
				el.value = (e as CustomEvent<string>).detail;
			});
			radio(el, 2).click();
			await new Promise((r) => setTimeout(r, 50));
			el.removeEventListener('change', () => undefined);
			expect(selected(el).textContent?.trim()).toBe('month');
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
			// the title renders as the attribute; the icon before the label
			expect(explorer.getAttribute('title')).toBe('Diagram');
			// a string option with no label names itself
			expect(explorer.textContent?.trim()).toBe('◆explorer');
			expect(radio(el, 1).textContent?.trim()).toBe('▦Table');
		});
	},
};

export const IdentitySelection: Story = {
	render: () => html`
		<cosmoz-toggle-group
			id="identity-group"
			.options=${[
				{ value: { id: 1, label: 'One' }, label: (o) => o.label },
				{ value: { id: 2, label: 'Two' }, label: (o) => o.label },
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
			// give the controlled loop a frame
			await new Promise((r) => setTimeout(r, 50));
			expect(el.value as { id: number }).toEqual({ id: 1, label: 'One' });
		});
	},
};
