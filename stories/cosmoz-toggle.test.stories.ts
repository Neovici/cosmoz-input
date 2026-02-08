import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, waitFor } from 'storybook/test';
import '../src/cosmoz-toggle';
import { style } from './style';

const meta: Meta = {
	title: 'Tests/Toggle',
};

export default meta;

type Story = StoryObj;

export const Change: Story = {
	render: () => html`
		${style}
		<cosmoz-toggle .label=${'Is active'}></cosmoz-toggle>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-toggle')!;
		const input = el.shadowRoot!.querySelector('input')!;

		await step(
			'clicking toggle dispatches change with detail: true',
			async () => {
				const changeSpy = fn();
				el.addEventListener('change', changeSpy, { once: true });

				input.click();

				await waitFor(() => {
					expect(changeSpy).toHaveBeenCalledTimes(1);
					expect((changeSpy.mock.calls[0][0] as CustomEvent).detail).toBe(true);
				});
			},
		);

		await step(
			'clicking again dispatches change with detail: false',
			async () => {
				const changeSpy = fn();
				el.addEventListener('change', changeSpy, { once: true });

				input.click();

				await waitFor(() => {
					expect(changeSpy).toHaveBeenCalledTimes(1);
					expect((changeSpy.mock.calls[0][0] as CustomEvent).detail).toBe(
						false,
					);
				});
			},
		);
	},
};

export const Label: Story = {
	render: () => html`
		${style}
		<cosmoz-toggle id="with-label" .label=${'Is active'}></cosmoz-toggle>
		<cosmoz-toggle id="no-label"></cosmoz-toggle>
	`,
	play: async ({ canvasElement, step }) => {
		await step('label is rendered when set', async () => {
			const el = canvasElement.querySelector('#with-label')!;
			const label = el.shadowRoot!.querySelector('label');
			expect(label).not.toBeNull();
			expect(label!.textContent).toBe('Is active');
		});

		await step('label is not rendered when absent', async () => {
			const el = canvasElement.querySelector('#no-label')!;
			const label = el.shadowRoot!.querySelector('label');
			expect(label).toBeNull();
		});
	},
};
