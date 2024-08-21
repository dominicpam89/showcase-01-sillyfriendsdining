import { mockpeople } from "@/lib/mock-data";
import CardContainer from "./FriendsList/CardContainer";
import CardPerson from "./FriendsList/CardPerson";

export default function PeopleList() {
	return (
		<CardContainer>
			{mockpeople.map((person) => (
				<CardPerson key={person.id} person={person} />
			))}
		</CardContainer>
	);
}
