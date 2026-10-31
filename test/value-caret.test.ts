import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import '../src/cosmoz-input';
import '../src/cosmoz-textarea';

type Host = HTMLElement & { value?: string | number };

const inner = (el: Host) =>
	el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

describe('value caret (Neovici/cosmoz-input#472)', () => {
	// A parent rebinds the normalized number while the user is mid-composition.
	// The inner `#input` coerces every host value to a string, so `live`'s
	// `===` never stabilizes for numeric bindings: it rewrites the element
	// text (destroying `2.` to `2`, truncating progressive typing, or blanking
	// `-`/`e` fragments the parent parsed to undefined) and drops the caret
	// to the end of the (new) value on every such render.
	describe('cosmoz-input', () => {
		it('renders an externally set numeric value (regression guard)', async () => {
			const el = await fixture<Host>(html`<cosmoz-input></cosmoz-input>`);
			el.value = 7;
			await elementUpdated(el);
			expect(inner(el).value).to.equal('7');
		});

		it('survives a numeric rebind while typing a decimal', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-input .value=${2.1}></cosmoz-input>`,
			);
			const input = inner(el);
			expect(input.value).to.equal('2.1');
			input.focus();
			await elementUpdated(el);
			// the caret is moved to the end deterministically before editing
			await sendKeys({ press: 'End' });
			await sendKeys({ press: 'Backspace' });
			expect(input.value).to.equal('2.');
			// the element notifies the host, as a string, through the input event
			expect(el.value).to.equal('2.');
			// the parent wrapper parses '2.' to the number 2 and rebinds it
			el.value = 2;
			await elementUpdated(el);
			// the directive must not rewrite '2.' (equal as numbers to 2)
			expect(input.value).to.equal('2.');
			// typing continues after the decimal point
			await sendKeys({ press: '2' });
			expect(input.value).to.equal('2.2');
		});

		it('keeps the caret after the decimal point on a numeric rebind', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-input .value=${2.1}></cosmoz-input>`,
			);
			const input = inner(el);
			expect(input.value).to.equal('2.1');
			input.focus();
			await elementUpdated(el);
			await sendKeys({ press: 'End' });
			await sendKeys({ press: 'Backspace' });
			expect(input.value).to.equal('2.');
			expect(input.selectionStart).to.equal(2);
			el.value = 2;
			await elementUpdated(el);
			// the caret stays right after the dot instead of jumping to the end
			expect(input.selectionStart).to.equal(2);
		});

		it('does not truncate progressive decimal entry', async () => {
			const el = await fixture<Host>(html`<cosmoz-input></cosmoz-input>`);
			const input = inner(el);
			el.value = undefined;
			await elementUpdated(el);
			input.focus();
			await elementUpdated(el);
			await sendKeys({ press: '2' });
			expect(input.value).to.equal('2');
			el.value = 2;
			await elementUpdated(el);
			expect(input.value).to.equal('2');
			await sendKeys({ press: '.' });
			expect(input.value).to.equal('2.');
			el.value = 2; // parent parses '2.' to 2 and rebinds mid-composition
			await elementUpdated(el);
			expect(input.value).to.equal('2.');
			await sendKeys({ press: '5' });
			expect(input.value).to.equal('2.5');
			// the rebind of 2.5 stabilizes instead of rewriting the field
			el.value = 2.5;
			await elementUpdated(el);
			expect(input.value).to.equal('2.5');
		});

		it('does not blank non-numeric fragments parsed to undefined', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-input .value=${'2.1'}></cosmoz-input>`,
			);
			const input = inner(el);
			expect(input.value).to.equal('2.1');
			input.focus();
			await elementUpdated(el);
			await sendKeys({ press: 'End' });
			await sendKeys({ type: '-' });
			expect(input.value).to.equal('2.1-');
			// the parent parses '2.1-' to undefined and rebinds it
			el.value = undefined;
			await elementUpdated(el);
			expect(input.value).to.equal('2.1-');
		});
	});

	describe('cosmoz-textarea', () => {
		it('renders an externally set numeric value (regression guard)', async () => {
			const el = await fixture<Host>(html`<cosmoz-textarea></cosmoz-textarea>`);
			el.value = 7;
			await elementUpdated(el);
			expect(inner(el).value).to.equal('7');
		});

		it('survives a numeric rebind while typing a decimal', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-textarea .value=${2.1}></cosmoz-textarea>`,
			);
			const input = inner(el);
			expect(input.value).to.equal('2.1');
			input.focus();
			await elementUpdated(el);
			await sendKeys({ press: 'End' });
			await sendKeys({ press: 'Backspace' });
			expect(input.value).to.equal('2.');
			expect(el.value).to.equal('2.');
			el.value = 2;
			await elementUpdated(el);
			expect(input.value).to.equal('2.');
			expect(input.selectionStart).to.equal(2);
			await sendKeys({ press: '2' });
			expect(input.value).to.equal('2.2');
		});
	});
});
