import '../cosmoz-textarea';
import { expect, html, fixture, nextFrame } from '@open-wc/testing';

describe('cosmoz-textarea', () => {
	it('renders', async () => {
		const el = await fixture(html`<cosmoz-textarea />`);
		expect(el).shadowDom.to.equal(`
			<div class="float" part="float"></div>
			<div class="wrap" part="wrap">
				<slot name="prefix"> </slot>
				<div class="control" part="control">
					<textarea id="input" part="input" placeholder=" " rows="1" style="resize: none"></textarea>
				</div>
				<slot name="suffix"></slot>
			</div>
			<div class="line" part="line"></div>
		`, { ignoreAttributes: ['style']});
	});

	it('auto grows', async () => {
		const el = await fixture(html`<cosmoz-textarea .value=${ '1\n2\n3' } .maxRows=${ 2 } />`),
			input = el.shadowRoot.querySelector('#input');
		await nextFrame();
		await nextFrame();
		const { height } = input.getBoundingClientRect();
		expect(height).to.be.above(40);
		expect(height).to.be.below(60);
	});

});
