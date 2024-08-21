import { Input } from "@/components/ui/input";

interface Props {
	icon: React.ReactNode;
	placeholder: string;
}
export default function InputGroup({ icon, placeholder }: Props) {
	return (
		<div aria-label="input-group" className="flex gap-2 items-center">
			<span className="size-4">{icon}</span>
			<Input placeholder={placeholder} />
		</div>
	);
}
