import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormAddFriend from "../forms/FormAddFriend";

export default function AddFriendDialog() {
	return (
		<Dialog>
			<Button asChild>
				<DialogTrigger>Add Friend</DialogTrigger>
			</Button>
			<DialogContent
				aria-label="add-friend-dialog-content"
				className="p-6 md:p-16 space-y-2"
			>
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
