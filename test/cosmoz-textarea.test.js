import '../src/cosmoz-textarea';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';

describe('cosmoz-textarea', () => {
	it('renders', async () => {
		const el = await fixture(html`<cosmoz-textarea />`);
		await expect(el).shadowDom.to.equalSnapshot({
			ignoreAttributes: ['style'],
		});
	});

	it('auto grows', async () => {
		const el = await fixture(
				html`<cosmoz-textarea .value=${'1\n2\n3'} .maxRows=${2} />`,
			),
			input = el.shadowRoot.querySelector('#input');
		await nextFrame();
		await nextFrame();
		const { height } = input.getBoundingClientRect();
		expect(height).to.be.above(40);
		expect(height).to.be.below(61);
	});

	it('placeholder attribute', async () => {
		const el = await fixture(
			html`<cosmoz-textarea placeholder="Enter text..."></cosmoz-textarea>`,
		);
		const textarea = el.shadowRoot.querySelector('textarea');
		expect(textarea.placeholder).to.equal('Enter text...');
	});
});
