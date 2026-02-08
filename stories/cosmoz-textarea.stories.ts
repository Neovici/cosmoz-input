import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-textarea';
import { style } from './style';

const meta: Meta = {
	title: 'Components/Textarea',
	component: 'cosmoz-textarea',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.';

export const Basic: Story = {
	render: () => html`
		${style}
		<cosmoz-textarea .label=${'Choose color'} .value=${'Red'}></cosmoz-textarea>
	`,
};

export const ErrorStory: Story = {
	name: 'Error',
	render: () => html`
		${style}
		<cosmoz-textarea
			invalid
			.label=${'Choose color'}
			.value=${'Red\nGreen\nBlue'}
			.errorMessage=${'Something is wrong!'}
			.maxRows=${2}
		></cosmoz-textarea>
	`,
};

export const Contour: Story = {
	render: () => html`
		${style}
		<style>
			cosmoz-textarea {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 4px;
				--cosmoz-input-wrap-padding: 12px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 10px;
				--cosmoz-input-float-display: none;
				--cosmoz-input-padding: 10px 8px;
			}
			cosmoz-textarea:not(:first-child) {
				margin-top: 10px;
			}
		</style>
		<cosmoz-textarea
			.label=${'Write your comment here'}
			.value=${loremIpsum}
		></cosmoz-textarea>
		<cosmoz-textarea
			no-label-float
			placeholder=${'Write your comment here'}
			.value=${loremIpsum}
		></cosmoz-textarea>
		<cosmoz-textarea
			invalid
			.errorMessage=${'Something is rotten in the state of Denmark'}
			.label=${'Write another comment here'}
			.value=${loremIpsum.toUpperCase()}
		></cosmoz-textarea>
		<cosmoz-textarea
			disabled
			.label=${'Write another comment here'}
			.value=${'You cannot type anything here!'}
		></cosmoz-textarea>
	`,
};
