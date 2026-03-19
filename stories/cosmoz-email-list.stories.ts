import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-email-list';
import { style } from './style';

const meta: Meta = {
	title: 'Components/EmailList',
	component: 'cosmoz-email-list',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
};

export const WithValues: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['john@example.com', 'mary@example.com']}
		></cosmoz-email-list>
	`,
};

export const Disabled: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			disabled
			.label=${'Email to'}
			.value=${['john@example.com']}
		></cosmoz-email-list>
	`,
};

export const WithError: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			invalid
			.label=${'Email to'}
			.errorMessage=${'Please enter valid email addresses'}
			.value=${['john@example']}
		></cosmoz-email-list>
	`,
};

export const WithSuffix: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}>
			<span slot="suffix" style="cursor:pointer; padding: 0 8px">Cc Bcc</span>
		</cosmoz-email-list>
	`,
};

export const Contour: Story = {
	render: () => html`
		${style}
		<style>
			cosmoz-email-list {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 8px;
				--cosmoz-input-wrap-padding: 12px 16px;
				--cosmoz-input-padding: 14px 0px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 8px;
				--cosmoz-input-float-display: none;
			}
		</style>
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['john@example.com', 'mary@example.com']}
		></cosmoz-email-list>
		<cosmoz-email-list
			invalid
			.label=${'Email to'}
			.errorMessage=${'Please enter valid email addresses'}
			.value=${['john@example.com']}
		></cosmoz-email-list>
		<cosmoz-email-list
			disabled
			.label=${'Email to (disabled)'}
		></cosmoz-email-list>
	`,
};
