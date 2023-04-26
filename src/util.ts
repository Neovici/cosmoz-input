interface Props {
	label?: string;
	noLabelFloat?: boolean;
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder, noLabelFloat, label }: Props) => {
	return (noLabelFloat ? label : undefined) || placeholder || ' ';
}
