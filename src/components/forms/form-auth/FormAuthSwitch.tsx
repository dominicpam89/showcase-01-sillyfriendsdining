interface Props {
	switchTab: (val: string) => void;
	val: string;
	text: string;
}
export default function FormAuthSwitch({ switchTab, val, text }: Props) {
	return (
		<span
			className="text-info font-medium cursor-pointer"
			onClick={() => switchTab(val)}
		>
			{text}
		</span>
	);
}
