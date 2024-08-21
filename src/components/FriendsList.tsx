import { mockpeople } from "@/lib/mock-data";
import CardContainer from "./friends-list/CardContainer";
import CardPerson from "./friends-list/CardPerson";

export default function FriendsList() {
	return (
		<CardContainer>
			{mockpeople.map((person) => (
				<CardPerson key={person.id} person={person} />
			))}
		</CardContainer>
	);
}
