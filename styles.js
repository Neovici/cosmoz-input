export const styles = `
	:host {
		--font-family: var(--cosmoz-input-font-family, var(--paper-font-subhead_-_font-family, 'Roboto', 'Noto', sans-serif));
		--font-size: var(--cosmoz-input-font-size, var(--paper-font-subhead_-_font-size, 16px));
		--line-height: var(--cosmoz-input-line-height, var(--paper-font-subhead_-_line-height, 24px));
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(--cosmoz-input-disabled-opacity, var(--paper-input-container-disabled_-_opacity, 0.33));
		--disabled-line-opacity: var(--cosmoz-input-disabled-line-opacity, var(--paper-input-container-underline-disabled_-_opacity, 1));
		--invalid-color: var(--cosmoz-input-invalid-color, var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b)));
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--focused-color: var(--cosmoz-input-focused-color, var(--primary-color, #3f51b5));

		display: block;
		padding: 8px 0;
		padding-top: var(--paper-input-container_-_padding-top, 8px);
		position: relative;

		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
		pointer-events: none;
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) #input:not(:placeholder-shown) + label  {
		display: none;
	}

	.float {
		line-height: calc(var(--line-height) * var(--label-scale));
	}

	.wrap {
		display: flex;
		align-items: center;
		position: relative;
	}

	.control {
		flex: 1;
		position: relative;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}

	label {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
	}

	`,
	textStyles = `	
	:host([invalid]) label, .error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(calc(var(--label-scale) * -100%)) scale(var(--label-scale));
	}
	#input:not(:placeholder-shown):focus + label {
		color: var(--focused-color);
	}

	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color:  var(--focused-color);
	}
	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host(:focus-within) #input {
		background: var(--focused-bg);
	}

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		display: block;
		background: var(--bg);
		line-height: inherit;
		font-size: inherit;
	}

	label {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		color: var(--color);
	}
	
	.line {
		padding-top: 1px;
		border-bottom: 1px solid var(--color);
		position: relative;
	}
	.line::before {
		content: '';
		position: absolute;
		display: block;
		border-bottom: 2px solid transparent;
		border-bottom-color: inherit;
		left: 0;
		right: 0;
		top: 0;
		transform: scale3d(0,1,1);
		transform-origin: center center;
		z-index: 1;
	}
	`,
	checkboxStyle = `
	label {
		vertical-align: middle;
	}

	.checkbox {
		box-sizing: border-box;
		width: 18px;
		height: 18px;
		background: transparent;
		border-radius: 4px;
		appearance: none;
		-webkit-appearance: none;
		outline: none;
		position: relative;
		user-select: none;
		cursor: pointer;
		display: inline-block;
		box-shadow: 0 0 0 2px rgba(0,0,0, 0.16) inset;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		vertical-align: middle;
		transition: background-color 140ms;
		margin: 1px 12px;
		flex: none;
	}

	.checkbox:checked {
		background-color: var(--cz-checkbox-checked-color, var(--primary-color, #3f51b5));
		box-shadow: none;
	}

	.checkbox:checked::before {
		content: "";
		position: absolute;
		box-sizing: content-box;
		width: 5px;
		height: 10px;
		border: 2.4px solid #fff;
		border-top: none;
		border-left: none;
		transform-origin: 5px 10px;
		transform: translate(3px) rotate(45deg);
	}

	.checkbox::after {
		content: '';
		display: block;
		bottom: -5px;
		left: -5px;
		right: -5px;
		top: -5px;
	}

	.checkbox:hover {
		box-shadow: 0 0 0 2px rgba(0, 0, 0, 1) inset, 0 0 2px 6px #2021240f;
	}

	.checkbox:checked:hover {
		box-shadow: 0 0 2px 6px #2021240f;
	}

	.checkbox:indeterminate::before {
		content: "";
		position: absolute;
		width: 10px;
		height: 2px;
		left: 4px;
		top: 8px;
		background-color: var(--cz-checkbox-checked-color, var(--primary-color, #3f51b5));
	}
`;
