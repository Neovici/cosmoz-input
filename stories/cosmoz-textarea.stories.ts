import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import '../src/cosmoz-textarea';

const meta: Meta = {
	title: 'Components/Textarea',
	component: 'cosmoz-textarea',
	tags: ['autodocs'],
};

export default meta;

type Story = StoryObj;

export const Basic: Story = {
	render: () => html`
		<cosmoz-textarea
			.label=${'Choose color'}
			.value=${'Red'}
			hint=${'Hint text'}
		></cosmoz-textarea>
	`,
	play: async ({ canvas, step }) => {
		await step('Renders textarea element', async () => {
			await canvas.findByShadowRole('textbox');
		});
	},
};

export const ErrorStory: Story = {
	name: 'Error',
	render: () => html`
		<cosmoz-textarea
			invalid
			.label=${'Choose color'}
			.value=${'Red\nGreen\nBlue'}
			error-message=${'Something is wrong!'}
			.maxRows=${2}
		></cosmoz-textarea>
	`,
};
