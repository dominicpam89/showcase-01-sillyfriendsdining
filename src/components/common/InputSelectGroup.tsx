import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { MockPersonType } from "@/lib/mock-data";
import React from "react";

interface Props {
	person: MockPersonType;
	placeholder: string;
	icon: React.ReactNode;
}
export default function InputSelectGroup({ person, placeholder, icon }: Props) {
	return (
		<Select>
			<div className="w-full flex gap-2 items-center">
				<span className="size-4">{icon}</span>
				<SelectTrigger className="w-full">
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
			</div>
			<SelectContent>
				<SelectItem value="you">You</SelectItem>
				<SelectItem value={person.id.toString()}>{person.name}</SelectItem>
			</SelectContent>
		</Select>
	);
}
