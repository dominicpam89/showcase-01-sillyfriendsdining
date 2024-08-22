import { FriendType } from "@/lib/definition/friends-list.type.ts";

interface Props {
	person: FriendType;
}

export default function PersonBalance({ person }: Props) {
	let message;
	let styleClass;

	if (person.balance < 0) {
		message = `You owe ${person.name} $${-person.balance}`;
		styleClass = "text-primary";
	} else if (person.balance > 0) {
		message = `${person.name} owes you $${person.balance}`;
		styleClass = "text-success";
	} else {
		message = `You and ${person.name} are even.`;
		styleClass = "";
	}

	return (
		<p aria-label="balance" className={`text-sm font-medium ${styleClass}`}>
			{message}
		</p>
	);
}
