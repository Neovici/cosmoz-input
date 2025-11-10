interface Props {
	label?: string;
	noLabelFloat?: boolean;
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder, noLabelFloat, label }: Props) => {
	return (noLabelFloat ? label : undefined) || placeholder || ' ';
};

// Firefox workaround: @container
export const observeInputState = (host: HTMLElement) => {
	const updateState = () => {
		const state = getComputedStyle(host)
			.getPropertyValue('--cosmoz-input-state')
			.trim();

		// Handle focus state
		if (state.includes('focus')) {
			host.setAttribute('data-focus', '');
		} else {
			host.removeAttribute('data-focus');
		}

		// Handle with-value state
		if (state.includes('with-value')) {
			host.setAttribute('data-with-value', '');
		} else {
			host.removeAttribute('data-with-value');
		}
	};

	// Observe style attribute changes
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (
				mutation.type === 'attributes' &&
				mutation.attributeName === 'style'
			) {
				updateState();
			}
		}
	});

	observer.observe(host, { attributes: true, attributeFilter: ['style'] });
	updateState();

	return () => observer.disconnect();
};
