interface Props {
	switchTab: (val: string) => void;
	val: string;
	text: string;
	disabled?: boolean;
}
export default function FormAuthSwitch({
	switchTab,
	val,
	text,
	disabled = false,
}: Props) {
	return (
		<span
			className="text-info font-medium cursor-pointer"
			onClick={() => (!disabled ? switchTab(val) : null)}
		>
			{text}
		</span>
	);
}
