import { MockPersonType } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PersonBalance from "./PersonBalance";

interface Props {
	person: MockPersonType;
}
export default function CardPerson({ person }: Props) {
	return (
		<div aria-label="person-card" className="p-4 flex gap-3 items-center">
			<Avatar aria-label="avatar" className="w-[50px] h-[50px]">
				<AvatarImage src={person.image} alt={person.name} />
				<AvatarFallback aria-label="fallback">
					{person.name[0].toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div aria-label="info">
				<h2 className="font-semibold">{person.name}</h2>
				<PersonBalance person={person} />
			</div>
		</div>
	);
}
