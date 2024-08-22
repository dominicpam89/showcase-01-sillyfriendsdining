import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-main";
import { PropsWithChildren } from "react";
import AddFriendDialog from "./AddFriendDialog";

export default function FriendListContainer({ children }: PropsWithChildren) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Your Fake Friends</CardTitle>
				<CardDescription>Pay or extort them!</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				<AddFriendDialog />
			</CardFooter>
		</Card>
	);
}
