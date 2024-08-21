import { mockpeople } from "@/lib/mock-data";
import CardContainer from "./PeopleList/CardContainer";
import CardPerson from "./PeopleList/CardPerson";

export default function PeopleList() {
	return (
		<CardContainer>
			{mockpeople.map((person) => (
				<CardPerson key={person.id} person={person} />
			))}
		</CardContainer>
	);
}
