import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-toggle';
import { style } from './style';

const meta: Meta = {
	title: 'Components/Toggle',
	component: 'cosmoz-toggle',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
	render: () => html`
		${style}
		<cosmoz-toggle .label=${'Is active'} .value=${true}></cosmoz-toggle>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders checkbox element', async () => {
			await canvas.findByShadowRole('checkbox');
		});
	},
};

export const Disabled: Story = {
	render: () => html`
		${style}
		<cosmoz-toggle disabled .label=${'Cannot toggle'}></cosmoz-toggle>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-toggle')!;
		await step('checkbox is disabled', async () => {
			const input = el.shadowRoot!.querySelector('input')!;
			expect(input.disabled).toBe(true);
		});
	},
};

export const Error: Story = {
	render: () => html`
		${style}
		<cosmoz-toggle
			.label=${'Is active'}
			.error=${'Something went wrong'}
		></cosmoz-toggle>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-toggle')!;
		await step('error message is rendered', async () => {
			await waitFor(() => {
				const failure = el.shadowRoot!.querySelector('.failure');
				expect(failure).not.toBeNull();
				expect(failure!.textContent).toBe('Something went wrong');
			});
		});
	},
};
