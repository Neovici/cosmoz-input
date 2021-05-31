import '../cosmoz-input';
import { expect, html, fixture } from '@open-wc/testing';
import { spy } from 'sinon';

describe('cosmoz-input', () => {
	it('render', async () => {
		const el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		expect(el).shadowDom.to.equal(`
			<div class="float" part="float"></div>
			<div class="wrap" part="wrap">
				<slot name="prefix"> </slot>
				<div class="control" part="control">
					<input id="input" part="input" placeholder=" " type="text" />
				</div>
				<slot name="suffix"></slot>
			</div>
			<div class="line" part="line"></div>
		`);
	});

	it('render label and value', async () => {
		const el = await fixture(html`<cosmoz-input .label=${ 'Label' } .value=${ 'value' }></cosmoz-input>`);
		expect(el).shadowDom.to.equal(`
			<div class="float" part="float"></div>
			<div class="wrap" part="wrap">
				<slot name="prefix"> </slot>
				<div class="control" part="control">
					<input id="input" part="input" placeholder=" " type="text" />
					<label for="input" part="label">
					Label
					</label>
				</div>
				<slot name="suffix"> </slot>
			</div>
			<div class="line" part="line"></div>
		`);
	});


	it('render errorMessage', async () => {
		const el = await fixture(html`<cosmoz-input invalid .errorMessage=${ 'Something is wrong!' } .value=${ 'wrong' }></cosmoz-input>`);
		expect(el).shadowDom.to.equal(`
			<div class="float" part="float"></div>
			<div class="wrap" part="wrap">
				<slot name="prefix"> </slot>
				<div class="control" part="control">
					<input id="input" part="input" placeholder=" " type="text" />
				</div>
				<slot name="suffix"> </slot>
			</div>
			<div class="line" part="line"></div>
			<div class="error" part="error">
				Something is wrong!
			</div>
		`);
	});

	it('focus', async () => {
		const focusSpy = spy(),
			el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		el.addEventListener('focused-changed', focusSpy, { once: true });
		expect(focusSpy).not.to.have.been.called;
		el.focus();
		expect(focusSpy).to.have.been.calledOnce;
	});

	it('change', async () => {
		const changeSpy = spy(),
			el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		el.addEventListener('change', changeSpy, { once: true });
		expect(changeSpy).not.to.have.been.called;
		el.shadowRoot.querySelector('input').dispatchEvent(new Event('change'));
		expect(changeSpy).to.have.been.calledOnce;
	});

	it('validate', async () => {
		const el = await fixture(html`<cosmoz-input .value=${ 'a' } pattern="[2]"></cosmoz-input>`);
		expect(el.validate()).to.be.false;
	});

	it('allowed-pattern', async () => {
		const el = await fixture(html`<cosmoz-input allowed-pattern="[c]"></cosmoz-input>`);
		expect(el.shadowRoot.querySelector('input').dispatchEvent(new InputEvent(
			'beforeinput',
			{
				data: 'c',
				cancelable: true
			}))).to.be.true;
	});

	it('allowed-pattern fail', async () => {
		const el = await fixture(html`<cosmoz-input allowed-pattern="[c]"></cosmoz-input>`);
		expect(el.shadowRoot.querySelector('input').dispatchEvent(new InputEvent(
			'beforeinput',
			{
				data: '2',
				cancelable: true
			}))).to.be.false;
	});

	it('value', async () => {
		const inputSpy = spy(),
			el = await fixture(html`<cosmoz-input></cosmoz-input>`);
		el.addEventListener('value-changed', inputSpy, { once: true });
		expect(inputSpy).not.to.have.been.called;
		el.shadowRoot.querySelector('input').dispatchEvent(new Event('input', { bubbles: true }));
		expect(inputSpy).to.have.been.calledOnce;
	});

	it('mousedown', async () => {
		const focusSpy = spy(),
			el = await fixture(html`<cosmoz-input><div slot="suffix"></div></cosmoz-input>`);
		el.addEventListener('focused-changed', focusSpy, { once: true });
		expect(focusSpy).not.to.have.been.called;

		el.shadowRoot.querySelector('input').dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
		expect(focusSpy).not.to.have.been.called;

		el.querySelector('div').dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
		expect(focusSpy).to.have.been.calledOnce;

		el.querySelector('div').dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
		expect(focusSpy).to.have.been.calledOnce;
	});
});

