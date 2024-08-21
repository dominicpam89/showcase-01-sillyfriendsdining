import { MockPersonType } from "@/lib/mock-data";

interface Props {
	person: MockPersonType;
}
export default function PersonBalance({ person }: Props) {
	if (person.balance < 0) {
		return (
			<p className="text-sm text-destructive">
				You owe {person.name} for ${person.balance}
			</p>
		);
	} else if (person.balance > 0) {
		return (
			<p className="text-sm text-success">
				{person.name} owes you ${person.balance}
			</p>
		);
	} else {
		return <p className="text-sm">You and {person.name} is even.</p>;
	}
}
