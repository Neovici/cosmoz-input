import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-textarea';

describe('cosmoz-textarea inputmode', () => {
	it('forwards inputmode to the inner textarea', async () => {
		const el = await fixture(
			html`<cosmoz-textarea inputmode="decimal"></cosmoz-textarea>`,
		);
		expect(
			el.shadowRoot!.querySelector('#input')!.getAttribute('inputmode'),
		).to.equal('decimal');
	});

	it('does not render inputmode when not set', async () => {
		const el = await fixture(html`<cosmoz-textarea></cosmoz-textarea>`);
		expect(
			el.shadowRoot!.querySelector('#input')!.hasAttribute('inputmode'),
		).to.equal(false);
	});
});
