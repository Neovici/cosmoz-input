import { html } from 'lit-html';
import '../src/cosmoz-textarea';
import { style } from './style';

export default {
	title: 'Textarea',
	component: 'cosmoz-textarea',
};
const loremIpsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mi magna, tincidunt ac feugiat sed, ultrices luctus orci. Quisque ultricies hendrerit ultricies. Nam vestibulum mauris a arcu facilisis, ut gravida lorem sagittis. Cras sagittis arcu felis, in consectetur ante tempor vitae. Duis leo ex, sagittis id eros id, dictum egestas nibh. Etiam at porta turpis. Proin maximus mauris vitae quam fringilla, iaculis facilisis ex tempor. Sed eu risus eget nibh accumsan pharetra. Integer et orci lorem. Proin imperdiet facilisis neque, vel luctus lorem bibendum a. Donec gravida sodales gravida. Mauris interdum dignissim faucibus.';
const basic = () => html`
		${style}
		<cosmoz-textarea .label=${'Choose color'} .value=${'Red'}></cosmoz-textarea>
	`,
	error = () => html`
		${style}
		<cosmoz-textarea
			invalid
			.label=${'Choose color'}
			.value=${'Red\nGreen\nBlue'}
			.errorMessage=${'Something is wrong!'}
			.maxRows=${2}
		></cosmoz-textarea>
	`,
	contour = () => html`
		${style}
		<style>
			cosmoz-textarea {
				--cosmoz-input-color: #aeacac;
				--cosmoz-input-border-radius: 4px;
				--cosmoz-input-padding: 12px;
				--cosmoz-input-line-display: none;
				--cosmoz-input-contour-size: 1px;
				--cosmoz-input-label-translate-y: 10px;
			}
		</style>
		<cosmoz-textarea
			.label=${'Write your comment here'}
			.value=${loremIpsum}
		></cosmoz-textarea>
	`;
export { basic, error, contour };
