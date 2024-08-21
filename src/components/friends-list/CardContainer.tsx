import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-main";
import { PropsWithChildren } from "react";
import CardDialog from "./CardDialog";

export default function CardContainer({ children }: PropsWithChildren) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Your Fake Friends</CardTitle>
				<CardDescription>Pay or extort them!</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter>
				<CardDialog />
			</CardFooter>
		</Card>
	);
}