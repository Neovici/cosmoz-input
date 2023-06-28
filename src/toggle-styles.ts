import { tagged as css } from '@neovici/cosmoz-utils';
export const toggleStyles = css`
	.container {
		display: flex;
		flex-flow: row nowrap;
	}
	.switch {
		display: block;
		height: 17px;
		position: relative;
		width: 30px;
		margin: auto 5px;
	}

	.switch input {
		display: none;
	}

	.slider {
		background-color: #ccc;
		bottom: 0;
		cursor: pointer;
		left: 0;
		position: absolute;
		right: 0;
		top: 0;
		transition: 0.4s;
	}

	.slider:before {
		background-color: #fff;
		bottom: 2px;
		content: '';
		height: 13px;
		left: 2px;
		position: absolute;
		transition: 0.4s;
		width: 13px;
	}

	input:checked + .slider {
		background-color: #508aef;
	}

	input:checked + .slider:before {
		transform: translateX(13px);
	}

	.slider.round {
		border-radius: 34px;
	}

	.slider.round:before {
		border-radius: 50%;
	}
	.label {
		left: 40px;
		max-width: 200px;
		white-space: nowrap;
		font-family: 'Public Sans', sans-serif;
	}
`;
