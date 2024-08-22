import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Trash2Icon as RemoveIcon } from "lucide-react";
import { FriendType } from "@/lib/definition/friends-list.type";
import { useRemoveFriend } from "@/lib/hooks/useRemoveFriend";
import { useDialog } from "@/lib/hooks/useDialog";

interface Props {
	person: FriendType;
}
export default function RemovePersonDialog({ person }: Props) {
	const { open, onOpenChange } = useDialog();
	const { onDeleteFriend, isPending } = useRemoveFriend(onOpenChange);
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogTrigger onClick={() => onOpenChange(true)}>
				<RemoveIcon className="size-4 text-destructive" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader className="flex flex-col gap-2">
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your friend from the list
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="w-full">
					<Button
						variant="link"
						className="w-full"
						onClick={() => onDeleteFriend(person.id, person.image)}
						disabled={isPending}
					>
						I don't care, i don't think this person is my friend anyway!
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
