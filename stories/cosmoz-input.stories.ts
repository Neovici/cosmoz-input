import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, waitFor } from 'storybook/test';
import '../src/cosmoz-input';
import { style } from './style';

const meta: Meta = {
	title: 'Input',
	component: 'cosmoz-input',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
	render: () => html`
		${style}
		<cosmoz-input .label=${'Choose color'}></cosmoz-input>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders input element', async () => {
			await canvas.findByShadowRole('textbox');
		});
	},
};

export const AlwaysFloatLabel: Story = {
	render: () => html`
		${style}
		<cosmoz-input
			always-float-label
			.label=${'Choose color'}
			placeholder=${'placeholder text'}
		></cosmoz-input>
	`,
};

export const NoLabelFloat: Story = {
	render: () => html`
		${style}
		<cosmoz-input no-label-float .label=${'Choose color'}></cosmoz-input>
	`,
};

export const Error: Story = {
	render: () => html`
		${style}
		<cosmoz-input
			.label=${'Choose color'}
			.value=${'Red'}
			invalid
			.errorMessage=${'Something is wrong!'}
		></cosmoz-input>
	`,
};

export const Autosize: Story = {
	render: () => html`
		${style}
		<cosmoz-input
			autosize
			no-label-float
			type="number"
			.value=${3.12}
		></cosmoz-input>
	`,
};

export const Color: Story = {
	render: () => html`
		${style}
		<cosmoz-input
			no-label-float
			type="color"
			.value=${'#ff0000'}
		></cosmoz-input>
	`,
};

export const Contour: Story = {
	render: () => html`
		${style}
		<style>
			cosmoz-input {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 8px;
				--cosmoz-input-wrap-padding: 12px 16px;
				--cosmoz-input-padding: 14px 0px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 8px;
				--cosmoz-input-float-display: none;
			}
			span {
				margin: 0 4px;
			}
		</style>
		<cosmoz-input .label=${'Insert a text input'}></cosmoz-input>
		<cosmoz-input
			.label=${'I want this input to have the suffix match the same placing!'}
			type="number"
			><span slot="suffix">${'suffix'}</span></cosmoz-input
		>
		<cosmoz-input .label=${'Same thing of above, with the prefix!'}
			><span slot="prefix">${'Prefix:'}</span></cosmoz-input
		>
		<cosmoz-input always-float-label .label=${'This label always floats'}
			><span slot="prefix">${'Example:'}</span></cosmoz-input
		>
		<cosmoz-input
			no-label-float
			.label=${'This label never floats'}
		></cosmoz-input>
		<cosmoz-input no-label-float .label=${'This label never floats with prefix'}
			><span slot="prefix">${'Example:'}</span></cosmoz-input
		>
		<cosmoz-input no-label-float .label=${'This label never floats with sufix'}
			><span slot="suffix">${'suffix'}</span></cosmoz-input
		>
		<cosmoz-input
			invalid
			.label=${'This input is invalid!'}
			.errorMessage=${'Something is rotten in the state of Denmark.'}
		></cosmoz-input>
		<cosmoz-input disabled .label=${'This input is disabled!'}></cosmoz-input>
	`,
};

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
		await step('change event propagates from inner input', async () => {
			const changeSpy = fn();
			el.addEventListener('change', changeSpy, { once: true });
			expect(changeSpy).not.toHaveBeenCalled();
			el.shadowRoot!.querySelector('input')!.dispatchEvent(new Event('change'));
			expect(changeSpy).toHaveBeenCalledTimes(1);
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
		<cosmoz-input><div slot="suffix"></div></cosmoz-input>
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

			// mousedown on suffix div should focus input
			el.querySelector('div')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			await waitFor(() => {
				expect(focusSpy).toHaveBeenCalledTimes(1);
			});

			// second mousedown should not trigger focused-changed again
			el.querySelector('div')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			expect(focusSpy).toHaveBeenCalledTimes(1);
		});
	},
};
