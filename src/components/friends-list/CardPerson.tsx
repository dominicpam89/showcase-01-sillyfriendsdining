import { FriendType } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import PersonBalance from "./PersonBalance";
import ManageBillDrawer from "./ManageBillDrawer";
import RemovePersonDialog from "./RemovePersonDialog";

interface Props {
	person: FriendType;
}
export default function CardPerson({ person }: Props) {
	return (
		<div
			aria-label="person-card"
			className="w-full p-4 flex flex-col gap-2 md:flex-row md:gap-4 items-center"
		>
			<Avatar aria-label="avatar" className="w-[50px] h-[50px]">
				<AvatarImage src={person.image} alt={person.name} />
				<AvatarFallback aria-label="fallback">
					{person.name[0].toUpperCase()}
				</AvatarFallback>
			</Avatar>
			<div aria-label="info" className="w-full text-center md:text-left">
				<h2 className="font-semibold">{person.name}</h2>
				<PersonBalance person={person} />
			</div>
			<div aria-label="action" className="w-4/12 flex gap-2 items-center">
				<ManageBillDrawer person={person} />
				<RemovePersonDialog />
			</div>
		</div>
	);
}
