import { useMemo } from 'haunted';

export const useAllowedPattern = (allowedPattern: string | RegExp) =>
	useMemo(() => {
		if (allowedPattern == null) {
			return;
		}
		const regexp = new RegExp(allowedPattern, 'u');
		return <T extends InputEvent>(e: T) => {
			if (!e.defaultPrevented && e.data && !regexp.test(e.data)) {
				e.preventDefault();
			}
		};
	}, [allowedPattern]);
