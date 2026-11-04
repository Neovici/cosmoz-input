import { elementUpdated, expect, fixture, html } from '@open-wc/testing';
import { component, useCallback, useState } from '@pionjs/pion';
import { sendKeys } from '@web/test-runner-commands';
import '../src/cosmoz-input';
import '../src/cosmoz-textarea';

type Host = HTMLElement & { value?: string | number };
type TestFormHost = HTMLElement & { value?: number };

const inner = (el: Host) =>
	el.shadowRoot!.querySelector<HTMLInputElement>('#input')!;

const formInput = (el: HTMLElement) =>
	(
		el.shadowRoot!.querySelector('cosmoz-input') as Host
	).shadowRoot!.querySelector('#input')! as HTMLInputElement;

const parseNumber = (raw: string): string | number | undefined => {
	if (raw === '') return '';
	const parsed = Number(raw);
	return Number.isNaN(parsed) ? undefined : parsed;
};

const TestForm = (host: TestFormHost) => {
	const [value, setValue] = useState<string | number | undefined>(host.value);
	const onInput = useCallback(
		(e: InputEvent) =>
			setValue(parseNumber((e.target as HTMLInputElement).value)),
		[],
	);
	return html`<cosmoz-input
		type="number"
		.value=${value}
		@input=${onInput}
	></cosmoz-input>`;
};

customElements.define('test-form', component(TestForm));

describe('cosmoz-input', () => {
	it('renders the number the parent sets', async () => {
		const el = await fixture<Host>(
			html`<cosmoz-input type="number"></cosmoz-input>`,
		);
		el.value = 7;
		await elementUpdated(el);
		expect(inner(el).value).to.equal('7');
	});

	it('renders and rebinds the text the parent sets', async () => {
		const el = await fixture<Host>(html`<cosmoz-input></cosmoz-input>`);
		el.value = 'a';
		await elementUpdated(el);
		expect(inner(el).value).to.equal('a');
		el.value = 'b';
		await elementUpdated(el);
		expect(inner(el).value).to.equal('b');
		el.value = '';
		await elementUpdated(el);
		expect(inner(el).value).to.equal('');
	});

	describe('integration', () => {
		it('handles number editing in a live form', async () => {
			const el = await fixture<TestFormHost>(
				html`<test-form .value=${2.1}></test-form>`,
			);
			const input = formInput(el);
			input.focus();
			await elementUpdated(el);
			await sendKeys({ press: 'End' });
			await sendKeys({ press: 'Backspace' });
			await elementUpdated(el);
			await sendKeys({ press: '2' });
			await elementUpdated(el);
			expect(input.value).to.equal('2.2');
		});
	});

	describe('cosmoz-textarea', () => {
		it('renders and rebinds the text the parent sets', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-textarea .value=${'1\n2\n3'}></cosmoz-textarea>`,
			);
			expect(inner(el).value).to.equal('1\n2\n3');
			el.value = 'x';
			await elementUpdated(el);
			expect(inner(el).value).to.equal('x');
		});
	});

	describe('number spinner', () => {
		// a textfield appearance is a number input without the browser arrows
		const appearance = (el: Host) => getComputedStyle(inner(el)).appearance;

		it('hides the browser arrows by default', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-input type="number"></cosmoz-input>`,
			);
			expect(appearance(el)).to.equal('textfield');
		});

		it('shows them with the spinner attribute', async () => {
			const el = await fixture<Host>(
				html`<cosmoz-input type="number" spinner></cosmoz-input>`,
			);
			expect(appearance(el)).not.to.equal('textfield');
		});
	});
});
