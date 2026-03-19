import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit-html';
import { expect, fn, waitFor } from 'storybook/test';
import '../src/cosmoz-email-list';
import { style } from './style';

const meta: Meta = {
	title: 'Tests/EmailList',
};

export default meta;

type Story = StoryObj;

export const Focus: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list') as HTMLElement;
		await step('focus() triggers focused-changed', async () => {
			const focusSpy = fn();
			el.addEventListener('focused-changed', focusSpy, { once: true });
			expect(focusSpy).not.toHaveBeenCalled();
			el.focus();
			await waitFor(() => {
				expect(focusSpy).toHaveBeenCalledTimes(1);
			});
		});
	},
};

export const AddEmailViaEnter: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;
		const spy = fn();
		el.addEventListener('value-changed', spy);

		await step('typing email + Enter adds it to value', async () => {
			input.focus();
			input.value = 'john@example.com';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			// wait for re-render so onKeyDown closure has updated text
			await waitFor(() => expect(input.value).toBe('john@example.com'));

			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
			);

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				expect(el.value).toEqual(['john@example.com']);
			});
		});

		await step('input is cleared after adding', async () => {
			expect(input.value).toBe('');
		});
	},
};

export const AddEmailViaComma: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;
		const spy = fn();
		el.addEventListener('value-changed', spy);

		await step('typing email + comma adds it to value', async () => {
			input.focus();
			input.value = 'jane@example.com,';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				expect(el.value).toEqual(['jane@example.com']);
			});
		});
	},
};

export const AddEmailViaBlur: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
		<input id="other" />
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;
		const spy = fn();
		el.addEventListener('value-changed', spy);

		await step('typing email + blur adds it to value', async () => {
			input.focus();
			input.value = 'bob@example.com';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			// wait for re-render so onBlur closure has updated text
			await waitFor(() => expect(input.value).toBe('bob@example.com'));

			input.dispatchEvent(new Event('blur', { bubbles: true }));

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				expect(el.value).toEqual(['bob@example.com']);
			});
		});
	},
};

export const InvalidEmail: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('invalid email sets invalid attribute on Enter', async () => {
			input.focus();
			input.value = 'not-an-email';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => expect(input.value).toBe('not-an-email'));

			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
			);

			await waitFor(() => {
				expect(el.hasAttribute('invalid')).toBe(true);
			});
			expect(el.value).toBeUndefined();
		});

		await step('invalid email sets invalid attribute on blur', async () => {
			el.removeAttribute('invalid');
			input.value = 'still-bad';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => expect(input.value).toBe('still-bad'));

			input.dispatchEvent(new Event('blur', { bubbles: true }));

			await waitFor(() => {
				expect(el.hasAttribute('invalid')).toBe(true);
			});
		});
	},
};

export const DuplicateEmail: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['john@example.com']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('duplicate email is not added', async () => {
			input.focus();
			input.value = 'john@example.com';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => expect(input.value).toBe('john@example.com'));

			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
			);

			await waitFor(() => {
				expect(el.value).toEqual(['john@example.com']);
			});
		});
	},
};

export const RemoveEmailViaTag: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['a@test.com', 'b@test.com']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const spy = fn();
		el.addEventListener('value-changed', spy);

		await step('removing a tag removes email from value', async () => {
			const tag = el.shadowRoot!.querySelector('cosmoz-tag')!;
			tag.dispatchEvent(new Event('remove', { bubbles: true }));

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				expect(el.value).toEqual(['b@test.com']);
			});
		});
	},
};

export const RemoveEmailViaBackspace: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['a@test.com', 'b@test.com']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;
		const spy = fn();
		el.addEventListener('value-changed', spy);

		await step('Backspace on empty input removes last email', async () => {
			input.focus();
			// input is empty, so Backspace should remove the last email
			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true }),
			);

			await waitFor(() => {
				expect(spy).toHaveBeenCalled();
				expect(el.value).toEqual(['a@test.com']);
			});
		});
	},
};

export const Validate: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['valid@test.com']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;

		await step('validate returns true for valid emails', async () => {
			expect(el.validate()).toBe(true);
			expect(el.hasAttribute('invalid')).toBe(false);
		});
	},
};

export const ValidateInvalidEmails: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			.label=${'Email to'}
			.value=${['not-valid']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;

		await step('validate returns false for invalid emails', async () => {
			expect(el.validate()).toBe(false);
			expect(el.hasAttribute('invalid')).toBe(true);
		});
	},
};

export const ValueChanged: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('adding email dispatches value-changed', async () => {
			const spy = fn();
			el.addEventListener('value-changed', spy, { once: true });

			input.focus();
			input.value = 'test@test.com';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => expect(input.value).toBe('test@test.com'));

			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
			);

			await waitFor(() => {
				expect(spy).toHaveBeenCalledTimes(1);
			});
		});
	},
};

export const DelegatesFocus: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list') as HTMLElement;
		await step(
			'host.focus() delegates to inner input via delegatesFocus',
			async () => {
				el.focus();
				await waitFor(() => {
					const input = el.shadowRoot!.querySelector('input')!;
					expect(el.shadowRoot!.activeElement).toBe(input);
				});
			},
		);
	},
};

export const Mousedown: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}>
			<span slot="suffix">Cc Bcc</span>
		</cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')!;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('mousedown on suffix focuses input', async () => {
			el.querySelector('span')!.dispatchEvent(
				new MouseEvent('mousedown', { bubbles: true }),
			);
			await waitFor(() => {
				expect(el.shadowRoot!.activeElement).toBe(input);
			});
		});
	},
};

export const Placeholder: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list placeholder="Add emails..."></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('placeholder shows when no emails', async () => {
			expect(input.placeholder).toBe('Add emails...');
		});
	},
};

export const PlaceholderHidesWithValues: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list
			placeholder="Add emails..."
			.value=${['a@b.com']}
		></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('placeholder is a space when emails exist', async () => {
			expect(input.placeholder).toBe(' ');
		});
	},
};

export const MultipleEmailsViaComma: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step(
			'pasting multiple comma-separated emails adds all valid ones',
			async () => {
				input.focus();
				input.value = 'a@test.com,b@test.com,';
				input.dispatchEvent(new Event('input', { bubbles: true }));

				await waitFor(() => {
					expect(el.value).toEqual(['a@test.com', 'b@test.com']);
				});
			},
		);
	},
};

export const EmailNormalization: Story = {
	render: () => html`
		${style}
		<cosmoz-email-list .label=${'Email to'}></cosmoz-email-list>
	`,
	play: async ({ canvasElement, step }) => {
		const el = canvasElement.querySelector('cosmoz-email-list')! as any;
		const input = el.shadowRoot!.querySelector('input')!;

		await step('emails are lowercased on add', async () => {
			input.focus();
			input.value = 'John@EXAMPLE.COM';
			input.dispatchEvent(new Event('input', { bubbles: true }));

			await waitFor(() => expect(input.value).toBe('John@EXAMPLE.COM'));

			input.dispatchEvent(
				new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }),
			);

			await waitFor(() => {
				expect(el.value).toEqual(['john@example.com']);
			});
		});
	},
};
