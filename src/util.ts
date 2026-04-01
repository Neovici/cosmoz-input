interface Props {
	placeholder?: string;
}
export const getPlaceholder = ({ placeholder }: Props) => {
	return placeholder || ' ';
};
