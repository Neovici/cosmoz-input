import { html } from 'lit-html';
import { styleMap } from 'lit-html/directives/style-map.js';
import { when } from 'lit-html/directives/when.js';
import '../src/cosmoz-input';

const CSS = html`
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500&display=swap');
		html {
			font-family: 'Inter', sans-serif;
		}
	</style>
`;

const Input = ({
	label = '',
	value = '',
	placeholder = '',
	type = 'text',
	disabled = false,
	readonly = false,
	invalid = false,
	errorMessage = '',
	pattern,
	allowedPattern,
	min,
	max,
	step,
	maxlength,
	noLabelFloat = false,
	alwaysFloatLabel = false,
	autosize = false,
	prefix,
	suffix,
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

		<cosmoz-input
			.label=${label}
			.value=${value}
			.placeholder=${placeholder}
			.type=${type}
			.errorMessage=${errorMessage}
			.pattern=${pattern}
			.allowedPattern=${allowedPattern}
			.min=${min}
			.max=${max}
			.step=${step}
			.maxlength=${maxlength}
			?disabled=${disabled}
			?readonly=${readonly}
			?invalid=${invalid}
			?no-label-float=${noLabelFloat}
			?always-float-label=${alwaysFloatLabel}
			?autosize=${autosize}
			style=${styleMap(styles)}
		>
			${when(prefix, () => html`<span slot="prefix">${prefix}</span>`)}
			${when(suffix, () => html`<span slot="suffix">${suffix}</span>`)}
		</cosmoz-input>
	`;
};

export default {
	title: 'Input',
	render: Input,
	argTypes: {
		label: {
			control: 'text',
			description: 'The label displayed above/inside the input',
		},
		value: {
			control: 'text',
			description: 'The current value of the input',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text shown when empty',
		},
		type: {
			control: 'select',
			options: ['text', 'number', 'email', 'password', 'tel', 'url', 'color'],
			description: 'The input type',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the input is disabled',
		},
		readonly: {
			control: 'boolean',
			description: 'Whether the input is read-only',
		},
		invalid: {
			control: 'boolean',
			description: 'Whether the input is in an invalid state',
		},
		errorMessage: {
			control: 'text',
			description: 'Error message displayed when invalid',
		},
		pattern: {
			control: 'text',
			description: 'Regex pattern for validation',
		},
		allowedPattern: {
			control: 'text',
			description: 'Regex pattern for allowed input characters',
		},
		min: {
			control: 'number',
			description: 'Minimum value (for number type)',
		},
		max: {
			control: 'number',
			description: 'Maximum value (for number type)',
		},
		step: {
			control: 'number',
			description: 'Step increment (for number type)',
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
		autosize: {
			control: 'boolean',
			description: 'Auto-size width based on content',
		},
		prefix: {
			control: 'text',
			description: 'Content to display before the input',
		},
		suffix: {
			control: 'text',
			description: 'Content to display after the input',
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
			description: 'Background color of the input',
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
			description: 'Border radius of the input wrapper',
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
			description: 'Padding inside the input wrapper',
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
				component: 'The Cosmoz Input web component',
			},
		},
	},
};

export const Basic = {
	args: {
		label: 'Choose color',
	},
	parameters: {
		docs: {
			description: {
				story: 'The basic version',
			},
		},
	},
};

export const AlwaysFloatLabel = {
	args: {
		label: 'Choose color',
		placeholder: 'placeholder text',
		alwaysFloatLabel: true,
	},
};

export const NoLabelFloat = {
	args: {
		label: 'Choose color',
		noLabelFloat: true,
	},
};

export const WithError = {
	args: {
		label: 'Choose color',
		value: 'Red',
		invalid: true,
		errorMessage: 'Something is wrong!',
	},
};

export const Autosize = {
	args: {
		type: 'number',
		value: '355102',
		noLabelFloat: true,
		autosize: true,
	},
};

export const Color = {
	args: {
		type: 'color',
		value: '#ff0000',
		noLabelFloat: true,
	},
};

export const Contour = {
	args: {
		label: 'Insert a text input',
		inputColor: '#aeacac',
		borderRadius: '8px',
		wrapPadding: '12px 16px',
		padding: '14px 0px',
		lineDisplay: 'none',
		contourSize: '1px',
		labelTranslateY: '8px',
		floatDisplay: 'none',
		readonly: false,
	},
};

export const Disabled = {
	args: {
		label: 'This input is disabled!',
		disabled: true,
	},
};

export const WithPrefix = {
	args: {
		label: 'This label has a prefix',
		prefix: 'Example:',
	},
};

export const WithSuffix = {
	args: {
		label: 'This label has a suffix',
		type: 'number',
		suffix: 'suffix',
	},
};

export const NoLabelFloatWithPrefix = {
	args: {
		label: 'This label never floats with prefix',
		noLabelFloat: true,
		prefix: 'Example:',
	},
};

export const NoLabelFloatWithSuffix = {
	args: {
		label: 'This label never floats with suffix',
		noLabelFloat: true,
		suffix: 'suffix',
	},
};
