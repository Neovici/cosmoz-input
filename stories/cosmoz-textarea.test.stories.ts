import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-textarea';
import { style } from './style';

const meta: Meta = {
	title: 'Tests/Textarea',
};

export default meta;

type Story = StoryObj;

export const AutoGrow: Story = {
	render: () => html`
		${style}
		<cosmoz-textarea .value=${'1\n2\n3'} .maxRows=${2}></cosmoz-textarea>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-textarea')!;
		await step('textarea auto grows based on content', async () => {
			await waitFor(() => {
				const input = el.shadowRoot!.querySelector('#input')!;
				const { height } = input.getBoundingClientRect();
				expect(height).toBeGreaterThan(40);
				expect(height).toBeLessThan(61);
			});
		});
	},
};

export const Placeholder: Story = {
	render: () => html`
		${style}
		<cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-textarea')!;
		await step(
			'placeholder attribute is forwarded to inner textarea',
			async () => {
				const textarea = el.shadowRoot!.querySelector('textarea')!;
				expect(textarea.placeholder).toBe('Enter text...');
			},
		);
	},
};
