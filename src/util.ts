interface Props {
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder }: Props) => {
	return placeholder || ' ';
};

export const defaultMax = (type: string, max?: string) =>
	max ?? (type === 'date' ? '9999-12-31' : undefined);
