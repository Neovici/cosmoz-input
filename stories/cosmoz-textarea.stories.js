import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import '../src/cosmoz-textarea';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		html {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;

const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci.';

const Textarea = ({
	label = '',
	value = '',
	placeholder = '',
	disabled = false,
	readonly = false,
	invalid = false,
	errorMessage = '',
	rows = 1,
	maxRows,
	maxlength,
	noLabelFloat = false,
	alwaysFloatLabel = false,
	// CSS Custom Properties
	inputColor,
	focusedColor,
	invalidColor,
	lineColor,
	background,
	focusedBackground,
	borderRadius,
	padding,
	wrapPadding,
	contourSize,
	lineDisplay,
	labelScale,
	labelTranslateY,
	floatDisplay,
}) => {
	const styles = {
		'--cosmoz-input-color': inputColor,
		'--cosmoz-input-focused-color': focusedColor,
		'--cosmoz-input-invalid-color': invalidColor,
		'--cosmoz-input-line-color': lineColor,
		'--cosmoz-input-background': background,
		'--cosmoz-input-focused-background': focusedBackground,
		'--cosmoz-input-border-radius': borderRadius,
		'--cosmoz-input-padding': padding,
		'--cosmoz-input-wrap-padding': wrapPadding,
		'--cosmoz-input-contour-size': contourSize,
		'--cosmoz-input-line-display': lineDisplay,
		'--cosmoz-input-label-scale': labelScale,
		'--cosmoz-input-label-translate-y': labelTranslateY,
		'--cosmoz-input-float-display': floatDisplay,
	};

	return html`
		${CSS}

		<cosmoz-textarea
			.label=${label}
			.value=${value}
			.placeholder=${placeholder}
			.errorMessage=${errorMessage}
			.rows=${rows}
			.maxRows=${maxRows}
			.maxlength=${maxlength}
			?disabled=${disabled}
			?readonly=${readonly}
			?invalid=${invalid}
			?no-label-float=${noLabelFloat}
			?always-float-label=${alwaysFloatLabel}
			style=${styleMap(styles)}
		></cosmoz-textarea>
	`;
};

export default {
	title: 'Textarea',
	render: Textarea,
	argTypes: {
		label: {
			control: 'text',
			description: 'The label displayed above/inside the textarea',
		},
		value: {
			control: 'text',
			description: 'The current value of the textarea',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when empty',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the textarea is disabled',
		},
		readonly: {
			control: 'boolean',
			description: 'Whether the textarea is read-only',
		},
		invalid: {
			control: 'boolean',
			description: 'Whether the textarea is in an invalid state',
		},
		errorMessage: {
			control: 'text',
			description: 'Error message displayed when invalid',
		},
		rows: {
			control: 'number',
			description: 'Initial number of visible text rows',
		},
		maxRows: {
			control: 'number',
			description: 'Maximum number of rows before scrolling',
		},
		maxlength: {
			control: 'number',
			description: 'Maximum number of characters allowed',
		},
		noLabelFloat: {
			control: 'boolean',
			description: 'Disable floating label behavior',
		},
		alwaysFloatLabel: {
			control: 'boolean',
			description: 'Always show the label in floated position',
		},
		// CSS Custom Properties
		inputColor: {
			control: 'color',
			description: 'Default color for label and line',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#737373' },
			},
			name: '--cosmoz-input-color',
		},
		focusedColor: {
			control: 'color',
			description: 'Color when focused',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#3f51b5' },
			},
			name: '--cosmoz-input-focused-color',
		},
		invalidColor: {
			control: 'color',
			description: 'Color when invalid',
			table: {
				category: 'Styling',
				defaultValue: { summary: '#fc5c5b' },
			},
			name: '--cosmoz-input-invalid-color',
		},
		lineColor: {
			control: 'color',
			description: 'Color of the underline',
			table: {
				category: 'Styling',
			},
			name: '--cosmoz-input-line-color',
		},
		background: {
			control: 'color',
			description: 'Background color of the textarea',
			table: {
				category: 'Styling',
			},
			name: '--cosmoz-input-background',
		},
		focusedBackground: {
			control: 'color',
			description: 'Background color when focused',
			table: {
				category: 'Styling',
			},
			name: '--cosmoz-input-focused-background',
		},
		borderRadius: {
			control: 'text',
			description: 'Border radius of the textarea wrapper',
			table: {
				category: 'Styling',
			},
			name: '--cosmoz-input-border-radius',
		},
		padding: {
			control: 'text',
			description: 'Padding of the host element',
			table: {
				category: 'Styling',
				defaultValue: { summary: '8px 0' },
			},
			name: '--cosmoz-input-padding',
		},
		wrapPadding: {
			control: 'text',
			description: 'Padding inside the textarea wrapper',
			table: {
				category: 'Styling',
				defaultValue: { summary: '0px' },
			},
			name: '--cosmoz-input-wrap-padding',
		},
		contourSize: {
			control: 'text',
			description: 'Size of the contour/border',
			table: {
				category: 'Styling',
			},
			name: '--cosmoz-input-contour-size',
		},
		lineDisplay: {
			control: 'select',
			options: ['block', 'none'],
			description: 'Display property of the underline',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'block' },
			},
			name: '--cosmoz-input-line-display',
		},
		labelScale: {
			control: 'number',
			description: 'Scale factor for floating label',
			table: {
				category: 'Styling',
				defaultValue: { summary: '0.75' },
			},
			name: '--cosmoz-input-label-scale',
		},
		labelTranslateY: {
			control: 'text',
			description: 'Vertical translation for label when floated',
			table: {
				category: 'Styling',
				defaultValue: { summary: '0%' },
			},
			name: '--cosmoz-input-label-translate-y',
		},
		floatDisplay: {
			control: 'select',
			options: ['block', 'none'],
			description: 'Display property of the float spacer',
			table: {
				category: 'Styling',
				defaultValue: { summary: 'block' },
			},
			name: '--cosmoz-input-float-display',
		},
	},
	parameters: {
		docs: {
			controls: {
				exclude: ['contour'],
			},
			description: {
				component: 'The Cosmoz Textarea web component',
			},
		},
	},
};

export const Basic = {
	args: {
		label: 'Choose color',
		value: loremIpsum,
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};

export const WithError = {
	args: {
		label: 'Choose color',
		value: loremIpsum,
		invalid: true,
		errorMessage: 'Something is wrong!',
		maxRows: 2,
	},
};

export const Disabled = {
	args: {
		label: 'Disabled textarea',
		value: 'You cannot type anything here!',
		disabled: true,
	},
};

export const NoLabelFloat = {
	args: {
		placeholder: 'Write your comment here',
		value: loremIpsum,
		noLabelFloat: true,
	},
};

export const Contour = {
	args: {
		label: 'Write your comment here',
		value: loremIpsum,
		inputColor: '#aeacac',
		borderRadius: '4px',
		wrapPadding: '12px',
		lineDisplay: 'none',
		contourSize: '1px',
		labelTranslateY: '10px',
		floatDisplay: 'none',
		padding: '10px 8px',
	},
};
