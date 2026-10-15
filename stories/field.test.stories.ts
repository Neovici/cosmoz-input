import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { within } from 'shadow-dom-testing-library';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-input';
import '../src/cosmoz-textarea';
import { style } from './style';

// Field contract (Base UI Field): the native control gets its name from the
// label, its description from the visible hint or error, and aria-invalid
// while the error is shown.

const meta: Meta = {
	title: 'Tests/Field',
};

export default meta;

type Story = StoryObj;

const control = (canvasElement: HTMLElement, tag = 'cosmoz-input') =>
	canvasElement
		.querySelector(tag)!
		.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

const settle = () =>
	new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

export const LabelAndHint: Story = {
	render: () =>
		html`${style}
			<cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		const input = await within(canvasElement).findByShadowRole('textbox', {
			name: 'Amount',
			description: 'Up to 10 000',
		});
		expect(input.hasAttribute('aria-invalid')).toBe(false);
	},
};

export const ErrorReplacesHint: Story = {
	render: () =>
		html`${style}
			<cosmoz-input
				label="Amount"
				hint="Up to 10 000"
				invalid
				.errorMessage=${'Too large'}
			></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Amount',
			description: 'Too large',
		});
		expect(control(canvasElement).getAttribute('aria-invalid')).toBe('true');
	},
};

export const InvalidFollowsTheFlag: Story = {
	render: () =>
		html`${style}
			<cosmoz-input label="Amount" hint="Up to 10 000"></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		const host = canvasElement.querySelector('cosmoz-input')!;
		const input = control(canvasElement);
		await waitFor(() => expect(input).toBeTruthy());
		expect(input.hasAttribute('aria-invalid')).toBe(false);

		Object.assign(host, { invalid: true, errorMessage: 'Too large' });
		await waitFor(() =>
			expect(input.getAttribute('aria-invalid')).toBe('true'),
		);
		expect(input.getAttribute('aria-describedby')).toBe('error');

		Object.assign(host, { invalid: false });
		await waitFor(() => expect(input.hasAttribute('aria-invalid')).toBe(false));
		expect(input.getAttribute('aria-describedby')).toBe('hint');
	},
};

export const CompactKeepsNameAndError: Story = {
	render: () =>
		html`${style}
			<cosmoz-input
				label="Amount"
				compact
				invalid
				.errorMessage=${'Too large'}
			></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Amount',
			description: 'Too large',
		});
		const root = canvasElement.querySelector('cosmoz-input')!.shadowRoot!;
		const label = root.querySelector('label')!;
		expect(label.classList.contains('visually-hidden')).toBe(true);
		expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
		expect(root.querySelector('cosmoz-tooltip')).toBeTruthy();
	},
};

export const DescriptionIsReadNotShown: Story = {
	render: () =>
		html`${style}
			<cosmoz-input
				label="Account"
				hint="Four digits"
				.description=${'Used for bookkeeping'}
			></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Account',
			description: 'Four digits Used for bookkeeping',
		});
		const description = canvasElement
			.querySelector('cosmoz-input')!
			.shadowRoot!.querySelector<HTMLElement>('#description')!;
		expect(description.getBoundingClientRect().width).toBeLessThanOrEqual(1);
	},
};

export const NoDescriptionWithoutText: Story = {
	render: () => html`${style} <cosmoz-input label="Amount"></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Amount',
		});
		expect(control(canvasElement).hasAttribute('aria-describedby')).toBe(false);
	},
};

export const TextareaField: Story = {
	render: () =>
		html`${style}
			<cosmoz-textarea
				label="Comment"
				required
				disabled
				invalid
				.errorMessage=${'Required'}
			></cosmoz-textarea>`,
	play: async ({ canvasElement }) => {
		await settle();
		const textarea = control(canvasElement, 'cosmoz-textarea');
		await waitFor(() => expect(textarea).toBeTruthy());
		expect(textarea.required).toBe(true);
		expect(textarea.getAttribute('aria-disabled')).toBe('true');
		expect(textarea.getAttribute('aria-invalid')).toBe('true');
		expect(textarea.getAttribute('aria-describedby')).toBe('error');
	},
};

export const TextareaCompact: Story = {
	render: () =>
		html`${style} <cosmoz-textarea label="Comment" compact></cosmoz-textarea>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Comment',
		});
		const label = canvasElement
			.querySelector('cosmoz-textarea')!
			.shadowRoot!.querySelector('label')!;
		expect(label.classList.contains('visually-hidden')).toBe(true);
	},
};

export const CellKeepsName: Story = {
	render: () =>
		html`${style}
			<cosmoz-input label="Quantity" variant="cell"></cosmoz-input>`,
	play: async ({ canvasElement }) => {
		await within(canvasElement).findByShadowRole('textbox', {
			name: 'Quantity',
		});
		const label = canvasElement
			.querySelector('cosmoz-input')!
			.shadowRoot!.querySelector('label')!;
		expect(label.getBoundingClientRect().width).toBeLessThanOrEqual(1);
	},
};
