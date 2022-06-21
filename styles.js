import { tagged as css } from '@neovici/cosmoz-utils';
export const styles = css`
	:host {
		--font-family: var(
			--cosmoz-input-font-family,
			var(--paper-font-subhead_-_font-family, 'Roboto', 'Noto', sans-serif)
		);
		--font-size: var(
			--cosmoz-input-font-size,
			var(--paper-font-subhead_-_font-size, 16px)
		);
		--line-height: var(
			--cosmoz-input-line-height,
			var(--paper-font-subhead_-_line-height, 24px)
		);
		--label-scale: var(--cosmoz-input-label-scale, 0.75);
		--disabled-opacity: var(
			--cosmoz-input-disabled-opacity,
			var(--paper-input-container-disabled_-_opacity, 0.33)
		);
		--disabled-line-opacity: var(
			--cosmoz-input-disabled-line-opacity,
			var(--paper-input-container-underline-disabled_-_opacity, 1)
		);
		--invalid-color: var(
			--cosmoz-input-invalid-color,
			var(--paper-input-container-invalid-color, var(--error-color, #fc5c5b))
		);
		--bg: var(--cosmoz-input-background);
		--focused-bg: var(--cosmoz-input-focused-background, var(--bg));
		--color: var(--cosmoz-input-color, var(--secondary-text-color, #737373));
		--focused-color: var(
			--cosmoz-input-focused-color,
			var(--primary-color, #3f51b5)
		);

		display: block;
		padding: var(--cosmoz-input-padding, 8px 0);
		padding-top: var(--paper-input-container_-_padding-top, 8px);
		padding-bottom: var(--paper-input-container_-_padding-bottom, 8px);
		position: relative;

		font-family: var(--font-family);
		font-size: var(--font-size);
		line-height: var(--line-height);
	}

	:host([disabled]) {
		opacity: var(--disabled-opacity);
		pointer-events: none;
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

	:host(:focus-within) #input {
		background: var(--focused-bg);
	}
	label {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: transform 0.25s, width 0.25s;
		transform-origin: left top;
		color: var(--color);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	:host([always-float-label]) label,
	#input:not(:placeholder-shown) + label {
		transform: translateY(calc(var(--label-scale) * -100%))
			scale(var(--label-scale));
	}
	#input:not(:placeholder-shown):focus + label {
		color: var(--focused-color);
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
		transform: scale3d(0, 1, 1);
		transform-origin: center center;
		z-index: 1;
	}
	:host(:focus-within) .line::before {
		transform: none;
		transition: 0.25s transform ease;
	}
	:host(:focus-within) .line {
		border-bottom-color: var(--focused-color);
	}
	:host([disabled]) .line {
		border-bottom-style: dashed;
		opacity: var(--disabled-line-opacity);
	}

	:host([no-label-float]) .float,
	:host([no-label-float]) #input:not(:placeholder-shown) + label {
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
	:host([invalid]) label,
	.error {
		color: var(--invalid-color);
	}
	:host([invalid]) .line {
		border-bottom-color: var(--invalid-color);
	}

	#input::-webkit-inner-spin-button {
		z-index: 1;
	}
`;