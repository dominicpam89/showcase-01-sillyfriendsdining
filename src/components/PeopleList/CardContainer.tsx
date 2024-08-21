import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-main";
import { Button } from "@/components/ui/button";
import { PropsWithChildren } from "react";

export default function CardContainer({ children }: PropsWithChildren) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Your Fake Friends</CardTitle>
				<CardDescription>Pay or extort them!</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				<Button size="sm">Add Friend</Button>
			</CardFooter>
		</Card>
	);
}
