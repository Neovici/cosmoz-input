import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import '../src/number-field';
import { style } from './style';

interface Args {
	label?: string;
	hint?: string;
	value?: number;
	min?: number;
	max?: number;
	step?: number;
	locale?: string;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	invalid?: boolean;
	errorMessage?: string;
	format?: Intl.NumberFormatOptions;
}

const meta: Meta<Args> = {
	title: 'Components/Number field',
	component: 'cosmoz-number-field',
	tags: ['autodocs'],
	render: (args) => html`
		${style}
		<cosmoz-number-field
			.label=${args.label}
			.hint=${args.hint}
			.value=${args.value}
			min=${ifDefined(args.min)}
			max=${ifDefined(args.max)}
			step=${ifDefined(args.step)}
			locale=${ifDefined(args.locale)}
			.placeholder=${args.placeholder}
			.format=${args.format}
			.errorMessage=${args.errorMessage}
			?disabled=${args.disabled}
			?readonly=${args.readonly}
			?required=${args.required}
			?invalid=${args.invalid}
		></cosmoz-number-field>
	`,
	argTypes: {
		label: { control: 'text' },
		hint: { control: 'text' },
		value: { control: 'number' },
		min: { control: 'number' },
		max: { control: 'number' },
		step: { control: 'number' },
		locale: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		readonly: { control: 'boolean' },
		required: { control: 'boolean' },
		invalid: { control: 'boolean' },
		errorMessage: { control: 'text' },
		format: { control: 'object' },
	},
};

export default meta;

type Story = StoryObj<Args>;

export const Basic: Story = {
	args: { label: 'Quantity', value: 1, min: 0 },
};

export const MinMax: Story = {
	args: {
		label: 'Rating',
		hint: 'From 1 to 5',
		value: 5,
		min: 1,
		max: 5,
	},
};

export const Currency: Story = {
	args: {
		label: 'Amount',
		value: 1234.5,
		step: 10,
		locale: 'sv-SE',
		format: { style: 'currency', currency: 'SEK' },
	},
};

export const Percent: Story = {
	args: {
		label: 'Discount',
		value: 0.25,
		min: 0,
		max: 1,
		step: 0.01,
		format: { style: 'percent' },
	},
};

export const Invalid: Story = {
	args: {
		label: 'Quantity',
		value: 0,
		invalid: true,
		errorMessage: 'Order at least one',
	},
};

export const Disabled: Story = {
	args: { label: 'Quantity', value: 3, disabled: true },
};

export const ReadOnly: Story = {
	args: { label: 'Quantity', value: 3, readonly: true },
};

export const InAForm: Story = {
	render: () => html`
		${style}
		<form
			@submit=${(e: SubmitEvent) => {
				e.preventDefault();
				const data = new FormData(e.target as HTMLFormElement);
				(e.target as HTMLFormElement).querySelector('output')!.value =
					JSON.stringify([...data.entries()]);
			}}
		>
			<cosmoz-number-field
				name="amount"
				label="Amount"
				required
				.format=${{ style: 'currency', currency: 'EUR' }}
				locale="de-DE"
			></cosmoz-number-field>
			<button type="submit">Submit</button>
			<button type="reset">Reset</button>
			<output></output>
		</form>
	`,
};
