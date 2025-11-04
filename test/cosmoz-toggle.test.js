import '../src/cosmoz-toggle';
import { expect, html, fixture } from '@open-wc/testing';

describe('cosmoz-toggle', () => {
	it('render', async () => {
		const el = await fixture(html`<cosmoz-toggle></cosmoz-toggle>`);
		await expect(el).shadowDom.to.equalSnapshot({
			ignoreAttributes: ['style'],
		});
	});

	it('render with label and value', async () => {
		const el = await fixture(
			html`<cosmoz-toggle .label=${'Toggle Label'} .value=${true}></cosmoz-toggle>`,
		);
		await expect(el).shadowDom.to.equalSnapshot({
			ignoreAttributes: ['style'],
		});
	});

	it('disabled attribute is observed', async () => {
		const el = await fixture(
			html`<cosmoz-toggle .label=${'Disabled Toggle'}></cosmoz-toggle>`,
		);
		const input = el.shadowRoot.querySelector('input');
		expect(input.disabled).to.be.false;

		// Set disabled attribute
		el.setAttribute('disabled', '');
		await el.updateComplete;

		expect(input.disabled).to.be.true;

		// Remove disabled attribute
		el.removeAttribute('disabled');
		await el.updateComplete;

		expect(input.disabled).to.be.false;
	});

	it('disabled property works', async () => {
		const el = await fixture(
			html`<cosmoz-toggle .label=${'Disabled Toggle'} .disabled=${true}></cosmoz-toggle>`,
		);
		const input = el.shadowRoot.querySelector('input');
		expect(input.disabled).to.be.true;
	});
});
