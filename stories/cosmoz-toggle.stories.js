import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '../src/cosmoz-toggle';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		html {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;

const Toggle = ({
	label = '',
	value = false,
	disabled = false,
	error = '',
	// CSS Custom Properties
	toggleColor,
	toggleThumbColor,
	toggleCheckedColor,
}) => {
	const styles = {
		'--cz-toggle-color': toggleColor,
		'--cz-toggle-thumb-color': toggleThumbColor,
		'--cz-toggle-checked-color': toggleCheckedColor,
	};

	return html`
		${CSS}

		<cosmoz-toggle
			.label=${label}
			.value=${value}
			.error=${error}
			?disabled=${disabled}
			style=${styleMap(styles)}
		></cosmoz-toggle>
	`;
};

export default {
	title: 'Toggle',
	render: Toggle,
	argTypes: {
		label: {
			control: 'text',
			description: 'The label displayed next to the toggle',
		},
		value: {
			control: 'boolean',
			description: 'The checked state of the toggle',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the toggle is disabled',
		},
		error: {
			control: 'text',
			description: 'Error message displayed below the toggle',
		},
		// CSS Custom Properties
		toggleColor: {
			control: 'color',
			description: 'Background color of the toggle when unchecked',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#101010' },
			},
			name: '--cz-toggle-color',
		},
		toggleThumbColor: {
			control: 'color',
			description: 'Color of the toggle thumb/knob',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#15b0d3' },
			},
			name: '--cz-toggle-thumb-color',
		},
		toggleCheckedColor: {
			control: 'color',
			description: 'Background color of the toggle when checked',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#66d7f0' },
			},
			name: '--cz-toggle-checked-color',
		},
	},
	parameters: {
		docs: {
			description: {
				component: 'The Cosmoz Toggle web component',
			},
		},
	},
};

export const Basic = {
	args: {
		label: 'Is active',
		value: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};

export const Disabled = {
	args: {
		label: 'Disabled toggle',
		value: false,
		disabled: true,
	},
};

export const WithError = {
	args: {
		label: 'Toggle with error',
		value: false,
		error: 'Error message here',
	},
};
