import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, waitFor } from 'storybook/test';
import '../src/cosmoz-input';
import '../src/toggle-group';

export default { title: 'Tests/Radius roles' } satisfies Meta;

export const ScopedRoles: StoryObj = {
	render: () => html`
		<div
			style="--cz-radius-control-group:24px;--cz-spacing-segment-inset:4px;--cz-radius-control:18px"
		>
			<cosmoz-input label="Amount"></cosmoz-input>
			<cosmoz-toggle-group .options=${['Day', 'Week']}></cosmoz-toggle-group>
			<cosmoz-toggle-group
				size="sm"
				.options=${['Day', 'Week']}
			></cosmoz-toggle-group>
		</div>
	`,
	play: async ({ canvasElement }) => {
		const scope = canvasElement.querySelector('div')!;
		const input = scope.querySelector('cosmoz-input')!;
		await waitFor(() =>
			expect(input.shadowRoot?.querySelector('.wrap')).toBeTruthy(),
		);
		expect(
			getComputedStyle(input.shadowRoot!.querySelector('.wrap')!).borderRadius,
		).toBe('18px');
		for (const host of scope.querySelectorAll('cosmoz-toggle-group')) {
			await waitFor(() =>
				expect(host.shadowRoot?.querySelector('.option')).toBeTruthy(),
			);
			const group = host.shadowRoot!.querySelector('.group')!;
			const option = host.shadowRoot!.querySelector('.option')!;
			expect(getComputedStyle(group).borderRadius).toBe('24px');
			expect(getComputedStyle(option).borderRadius).toBe('20px');
			(host as HTMLElement).style.setProperty(
				'--cz-radius-control-group',
				'2px',
			);
			expect(getComputedStyle(option).borderRadius).toBe('0px');
		}
	},
};
