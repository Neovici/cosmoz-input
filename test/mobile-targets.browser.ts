import '@neovici/cosmoz-tokens';
import { afterEach, expect, it } from 'vitest';
import '../src/toggle-group';
import type { ToggleGroupElement } from '../src/toggle-group';

afterEach(() => {
	document.body.replaceChildren();
});

for (const size of ['', 'sm']) {
	it(`${size} options keep touch targets without enlarging desktop controls`, async () => {
		const group = document.createElement(
			'cosmoz-toggle-group',
		) as ToggleGroupElement<string>;
		group.options = ['All', 'Left', 'Done'];
		group.value = 'All';
		group.setAttribute('size', size);
		document.body.append(group);
		await expect
			.poll(() => group.shadowRoot?.querySelectorAll('button').length)
			.toBe(3);
		const touch = matchMedia('(pointer: coarse)').matches;
		for (const button of group.shadowRoot!.querySelectorAll('button')) {
			const height = button.getBoundingClientRect().height;
			expect(height).toBeGreaterThanOrEqual(touch ? 44 : 24);
			if (!touch) expect(height).toBeLessThan(44);
		}
	});
}
