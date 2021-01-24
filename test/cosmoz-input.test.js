import '../cosmoz-input';
import {
	assert, html, fixture
} from '@open-wc/testing';
import { spy } from 'sinon';

suite('cosmoz-input', () => {
	test('render', async () => {
		const el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		assert.shadowDom.equalSnapshot(el);
	});

	test('render label and value', async () => {
		const el = await fixture(html`<cosmoz-input .label=${ 'Label' } .value=${ 'value' }></cosmoz-input>`);
		assert.shadowDom.equalSnapshot(el);
	});


	test('render errorMessage', async () => {
		const el = await fixture(html`<cosmoz-input invalid .errorMessage=${ 'Something is wrong!' } .value=${ 'wrong' }></cosmoz-input>`);
		assert.shadowDom.equalSnapshot(el);
	});

	test('focus', async () => {
		const focusSpy = spy(),
			el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		el.addEventListener('focused-changed', focusSpy, { once: true });
		assert.isFalse(focusSpy.calledOnce);
		el.focus();
		assert.isTrue(focusSpy.calledOnce);
	});

	test('focus', async () => {
		const inputSpy = spy(),
			el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		el.addEventListener('value-changed', inputSpy, { once: true });
		assert.isFalse(inputSpy.calledOnce);
		el.shadowRoot.querySelector('input').dispatchEvent(new Event('input', { bubbles: true }));
		assert.isTrue(inputSpy.calledOnce);
	});
});

