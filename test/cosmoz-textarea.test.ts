import { expect, fixture, html, waitUntil } from '@open-wc/testing';
import '../src/cosmoz-textarea';

const getInput = (el: HTMLElement) =>
	el.shadowRoot!.querySelector('#input') as HTMLElement;

describe('cosmoz-textarea max-height', () => {
	it('recomputes max-height when the element becomes visible', async () => {
		const wrapper = (await fixture(html`
			<div style="display: none">
				<cosmoz-textarea .value=${'1\n2\n3'} .maxRows=${2}></cosmoz-textarea>
			</div>
		`)) as HTMLElement;
		const el = wrapper.querySelector('cosmoz-textarea') as HTMLElement;

		// cap was computed while hidden; it is baked in as 0
		await waitUntil(
			() => getInput(el).style.maxHeight === '0px',
			'max-height is baked in as 0 while hidden',
			{ timeout: 3000 },
		);

		wrapper.style.display = '';

		await waitUntil(
			() => parseFloat(getInput(el).style.maxHeight) > 0,
			'max-height should be recomputed when visible',
			{ timeout: 3000 },
		);
		const maxHeight = getInput(el).style.maxHeight;
		expect(maxHeight).to.not.equal('0px');
		expect(getInput(el).getBoundingClientRect().height).to.be.greaterThan(0);
		expect(getInput(el).getBoundingClientRect().height).to.be.at.most(
			parseFloat(maxHeight),
		);
	});

	it('applies maxRows when set after mount', async () => {
		const el = (await fixture(
			html`<cosmoz-textarea .value=${'1\n2\n3'}></cosmoz-textarea>`,
		)) as HTMLElement & { maxRows?: number };

		expect(getInput(el).style.maxHeight).to.equal('');

		el.maxRows = 2;

		await waitUntil(
			() => parseFloat(getInput(el).style.maxHeight) > 0,
			'max-height should be capped once maxRows is set',
			{ timeout: 3000 },
		);
		expect(getInput(el).getBoundingClientRect().height).to.be.at.most(
			parseFloat(getInput(el).style.maxHeight),
		);
	});

	it('still auto-heights in the normal visible flow', async () => {
		const el = (await fixture(
			html`<cosmoz-textarea .value=${'1\n2\n3'} .maxRows=${2}></cosmoz-textarea>`,
		)) as HTMLElement;

		await waitUntil(
			() => parseFloat(getInput(el).style.maxHeight) > 0,
			'max-height should be set',
			{ timeout: 3000 },
		);

		const snapshot = () => ({
			maxHeight: getInput(el).style.maxHeight,
			height: getInput(el).style.height,
			rect: getInput(el).getBoundingClientRect().height,
		});

		const a = snapshot();
		expect(a.rect).to.be.greaterThan(0);
		expect(a.rect).to.be.at.most(parseFloat(a.maxHeight));
		expect(a.height).to.not.equal('');

		// observer feedback settles: states do not change anymore
		await new Promise((r) => setTimeout(r, 200));
		const b = snapshot();
		expect(b).to.deep.equal(a);
		await new Promise((r) => setTimeout(r, 200));
		expect(snapshot()).to.deep.equal(a);
	});
});
