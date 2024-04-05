interface Props {
	label?: string;
	noLabelFloat?: boolean;
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder, noLabelFloat, label }: Props) => {
	if (placeholder === label) {
		return ' ';
	}
	return (noLabelFloat ? label : undefined) || placeholder || ' ';
};
