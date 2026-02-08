import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
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
};
