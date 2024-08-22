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
import { useState } from "react";
import ContextFormAddFriendDialogProvider from "@/lib/context/form-add-friend-dialog";

export default function AddFriendDialog() {
	const [open, setOpen] = useState(false);
	const onOpenChange = (o: boolean) => setOpen(o);
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<Button asChild>
				<DialogTrigger onClick={() => setOpen(true)}>
					Add Friend
				</DialogTrigger>
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
				<ContextFormAddFriendDialogProvider
					open={open}
					onOpenChange={onOpenChange}
				>
					<FormAddFriend />
				</ContextFormAddFriendDialogProvider>
			</DialogContent>
		</Dialog>
	);
}
