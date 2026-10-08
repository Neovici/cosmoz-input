import { expect, fixture, html } from '@open-wc/testing';
import { sendKeys } from '@web/test-runner-commands';
import '../src/toggle-group';

const radio = (el: Element, position: number) =>
	el.shadowRoot!.querySelectorAll('[part~=option]')[position] as HTMLElement;

const active = (): Element | null => {
	let el = document.activeElement;
	while (el?.shadowRoot) {
		el = el.shadowRoot.activeElement;
	}
	return el;
};

describe('cosmoz-toggle-group keyboard', () => {
	let el: HTMLElement & { value?: string };

	beforeEach(async () => {
		el = await fixture(html`
			<cosmoz-toggle-group
				.options=${['today', 'week', 'month']}
				.value=${'today'}
			></cosmoz-toggle-group>
		`);
	});

	it('the selected option is the one tab stop', () => {
		expect(radio(el, 0).getAttribute('tabindex')).to.equal('0');
		expect(radio(el, 1).getAttribute('tabindex')).to.equal('-1');
		expect(radio(el, 2).getAttribute('tabindex')).to.equal('-1');
	});

	it('ArrowRight moves the selection and focus', async () => {
		radio(el, 0).focus();
		await sendKeys({ press: 'ArrowRight' });
		expect(el.value).to.equal('week');
		expect(radio(el, 1).getAttribute('aria-checked')).to.equal('true');
		expect(active()).to.equal(radio(el, 1));
	});

	it('ArrowRight wraps past the last option', async () => {
		radio(el, 2).focus();
		el.value = 'month';
		await sendKeys({ press: 'ArrowRight' });
		expect(el.value).to.equal('today');
	});

	it('ArrowLeft moves back', async () => {
		radio(el, 2).focus();
		el.value = 'month';
		await sendKeys({ press: 'ArrowLeft' });
		expect(el.value).to.equal('week');
		expect(active()).to.equal(radio(el, 1));
	});
});
