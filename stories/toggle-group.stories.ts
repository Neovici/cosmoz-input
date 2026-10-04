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
			const week = el.shadowRoot!.querySelector('[data-value=week]')!;
			expect(week.getAttribute('aria-checked')).toBe('true');
			expect(
				el
					.shadowRoot!.querySelector('[data-value=today]')!
					.getAttribute('aria-checked'),
			).toBe('false');
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
			const b = el.shadowRoot!.querySelector('[data-value=b]') as
				| HTMLButtonElement
				| undefined;
			expect(b?.disabled).toBe(true);
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
			(
				el.shadowRoot!.querySelector('[data-value=month]') as HTMLElement
			).click();
			await new Promise((r) => setTimeout(r, 50));
			vetoes = false;
			expect(el.value).toBe('today');
			expect(
				el
					.shadowRoot!.querySelector('[data-value=today]')!
					.getAttribute('aria-checked'),
			).toBe('true');
			expect(
				el
					.shadowRoot!.querySelector('[data-value=month]')!
					.getAttribute('aria-checked'),
			).toBe('false');
		});
		await step('a plain click commits', async () => {
			// controlled component: the consumer writes the committed value
			// back (attribute reflects; the container re-renders)
			el.addEventListener('change', (e) => {
				el.setAttribute('value', (e as CustomEvent<string>).detail);
			});
			(
				el.shadowRoot!.querySelector('[data-value=month]') as HTMLElement
			).click();
			await new Promise((r) => setTimeout(r, 50));
			el.removeEventListener('change', () => undefined);
			expect(
				el
					.shadowRoot!.querySelector('[data-value=month]')!
					.getAttribute('aria-checked'),
			).toBe('true');
		});
	},
};
