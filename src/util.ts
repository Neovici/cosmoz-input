interface Props {
	label?: string;
	noLabelFloat?: boolean;
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder, noLabelFloat, label }: Props) => {
	return (noLabelFloat ? label : undefined) || placeholder || ' ';
};

export const defaultMax = (type: string, max?: string) =>
	max ?? (type === 'date' ? '9999-12-31' : undefined);
