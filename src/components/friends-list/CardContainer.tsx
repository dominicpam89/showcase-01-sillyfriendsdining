import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-main";
import { Button } from "@/components/ui/button";
import { PropsWithChildren, useContext } from "react";
import { ContextFriendsList } from "@/lib/context/friend-list.context";

export default function CardContainer({ children }: PropsWithChildren) {
	const { toggleViewForm, viewFormAddFriend } = useContext(ContextFriendsList);

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
			</CardFooter>
		</Card>
	);
}
