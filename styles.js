export const styles = `
	:host {
		display: block;
		padding: 8px 0;
		padding-top: var(--paper-input-container_-_padding-top, 8px);
	}

	:host, label, #input {
		font-family: var(--cosmoz-subhead-font-family, var(--paper-font-subhead_-_font-family, 'Roboto', 'Noto', sans-serif));
		font-size: var(--cosmoz-subhead-font-size, var(--paper-font-subhead_-_font-size, 16px));
		line-height: var(--cosmoz-subhead-line-height, var(--paper-font-subhead_-_line-height, 24px));
		display: block;
	}

	:host([disabled]) {
		opacity: var(--cosmoz-input-disabled-opacity, var(--paper-input-container-disabled_-_opacity, 0.33));
		pointer-events: none;
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

	#input {
		padding: 0;
		margin: 0;
		outline: none;
		border: none;
		width: 100%;
		max-width: 100%;
		background: var(--cosmoz-input-background, initial);
	}

	:host(:focus-within) #input {
		background: var(--cosmoz-input-focused-background, var(--cosmoz-input-background, initial));
	}
	label {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--secondary-text-color, #737373);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(-75%) scale(0.75);
	}
	#input:not(:placeholder-shown):focus + label {
		color: var(--primary-color, #3f51b5);
	}

	.line {
		border-bottom: 2px solid var(--secondary-text-color, #737373);
	}
	:host(:focus-within) .line {
		border-bottom-color:  var(--primary-color, #3f51b5);
	}
	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--cosmoz-input-disabled-line-opacity, var(--paper-input-container-underline-disabled_-_opacity, 1));
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) #input:not(:placeholder-shown) + label  {
		display: none;
	}

	.error {
		font-size: 12px;
		line-height: 20px;
		overflow: hidden;
		text-overflow: clip;
		position: absolute;
		max-width: 100%;
	}
	:host([invalid]) label, .error {
		color: var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b));
	}
	:host([invalid]) .line {
		border-bottom-color: var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b));
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}
`;
