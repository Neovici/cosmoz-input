import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, waitFor } from 'storybook/test';
import '../src/cosmoz-input';
import { style } from './style';

const meta: Meta = {
	title: 'Tests/Input',
};

export default meta;

type Story = StoryObj;

export const Focus: Story = {
	render: () => html`
		${style}
		<cosmoz-input></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step('focus() triggers focused-changed', async () => {
			const focusSpy = fn();
			el.addEventListener('focused-changed', focusSpy, { once: true });
			expect(focusSpy).not.toHaveBeenCalled();
			el.focus();
			await waitFor(() => {
				expect(focusSpy).toHaveBeenCalledTimes(1);
			});
		});
	},
};

export const Change: Story = {
	render: () => html`
		${style}
		<cosmoz-input></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step('change event is re-dispatched on the host', async () => {
			const changeSpy = fn();
			el.addEventListener('change', changeSpy);

			const input = el.shadowRoot!.querySelector('input')!;
			input.focus();
			input.value = 'hello';
			input.dispatchEvent(new Event('change', { bubbles: true }));

			await waitFor(() => {
				expect(changeSpy).toHaveBeenCalledTimes(1);
			});
		});
	},
};

export const Validate: Story = {
	render: () => html`
		${style}
		<cosmoz-input .value=${'a'} pattern="[2]"></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input') as HTMLElement & {
			validate: () => boolean;
		};
		await step('validate returns false for invalid pattern', async () => {
			expect(el.validate()).toBe(false);
		});
	},
};

export const AllowedPattern: Story = {
	render: () => html`
		${style}
		<cosmoz-input allowed-pattern="[c]"></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		const input = el.shadowRoot!.querySelector('input')!;
		await step('allowed character is not prevented', async () => {
			expect(
				input.dispatchEvent(
					new InputEvent('beforeinput', {
						data: 'c',
						cancelable: true,
					}),
				),
			).toBe(true);
		});

		await step('disallowed character is prevented', async () => {
			expect(
				input.dispatchEvent(
					new InputEvent('beforeinput', {
						data: '2',
						cancelable: true,
					}),
				),
			).toBe(false);
		});
	},
};

export const ValueChanged: Story = {
	render: () => html`
		${style}
		<cosmoz-input></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step('input event triggers value-changed', async () => {
			const inputSpy = fn();
			el.addEventListener('value-changed', inputSpy, { once: true });
			expect(inputSpy).not.toHaveBeenCalled();
			el.shadowRoot!.querySelector('input')!.dispatchEvent(
				new Event('input', { bubbles: true }),
			);
			expect(inputSpy).toHaveBeenCalledTimes(1);
		});
	},
};

export const Placeholder: Story = {
	render: () => html`
		${style}
		<cosmoz-input placeholder="Search..."></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step(
			'placeholder attribute is forwarded to inner input',
			async () => {
				const input = el.shadowRoot!.querySelector('input')!;
				expect(input.placeholder).toBe('Search...');
			},
		);
	},
};

export const Mousedown: Story = {
	render: () => html`
		${style}
		<cosmoz-input><span slot="suffix">suffix</span></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step('mousedown on suffix focuses input without blur', async () => {
			const focusSpy = fn();
			el.addEventListener('focused-changed', focusSpy, { once: true });
			expect(focusSpy).not.toHaveBeenCalled();

			// mousedown on inner input should not trigger our handler
			el.shadowRoot!.querySelector('input')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			expect(focusSpy).not.toHaveBeenCalled();

			// mousedown on suffix span should focus input
			el.querySelector('span')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			await waitFor(() => {
				expect(focusSpy).toHaveBeenCalledTimes(1);
			});

			// second mousedown should not trigger focused-changed again
			el.querySelector('span')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			expect(focusSpy).toHaveBeenCalledTimes(1);
		});
	},
};

export const DelegatesFocus: Story = {
	render: () => html`
		${style}
		<cosmoz-input></cosmoz-input>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-input')!;
		await step(
			'host.focus() delegates to inner input via delegatesFocus',
			async () => {
				el.focus();
				await waitFor(() => {
					const input = el.shadowRoot!.querySelector('input')!;
					expect(el.shadowRoot!.activeElement).toBe(input);
				});
			},
		);
	},
};
