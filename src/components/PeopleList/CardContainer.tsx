import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-main";
import { Button } from "@/components/ui/button";
import { PropsWithChildren, useState } from "react";
import FormAddFriend from "./FormAddFriend";

export default function CardContainer({ children }: PropsWithChildren) {
	// form handle
	const [viewFormAddFriend, setViewFormAddFriend] = useState(false);
	const toggleViewForm = () => setViewFormAddFriend((ps) => !ps);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Your Fake Friends</CardTitle>
				<CardDescription>Pay or extort them!</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				<Button
					className="transition-default"
					onClick={toggleViewForm}
					size="sm"
					variant={viewFormAddFriend ? "outline" : "default"}
				>
					{viewFormAddFriend ? "Cancel" : "Add Friend"}
				</Button>
				{viewFormAddFriend && <FormAddFriend />}
			</CardFooter>
		</Card>
	);
}
