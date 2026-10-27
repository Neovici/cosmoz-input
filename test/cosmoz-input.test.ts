import { expect, fixture, html } from '@open-wc/testing';
import '../src/cosmoz-input';

describe('cosmoz-input inputmode', () => {
	it('forwards inputmode to the inner input', async () => {
		const el = await fixture(
			html`<cosmoz-input inputmode="decimal"></cosmoz-input>`,
		);
		expect(
			el.shadowRoot!.querySelector('#input')!.getAttribute('inputmode'),
		).to.equal('decimal');
	});

	it('does not render inputmode when not set', async () => {
		const el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		expect(
			el.shadowRoot!.querySelector('#input')!.hasAttribute('inputmode'),
		).to.equal(false);
	});
});
