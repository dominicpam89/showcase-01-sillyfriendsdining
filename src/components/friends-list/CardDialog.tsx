import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormAddFriend from "./FormAddFriend";

export default function CardDialog() {
	return (
		<Dialog>
			<Button asChild>
				<DialogTrigger>Add Friend</DialogTrigger>
			</Button>
			<DialogContent className="p-16 space-y-2">
				<DialogHeader>
					<DialogTitle>Add Friend</DialogTitle>
					<DialogDescription>
						You may add your fake friend for you to extort them!
					</DialogDescription>
				</DialogHeader>
				<FormAddFriend />
			</DialogContent>
		</Dialog>
	);
}
