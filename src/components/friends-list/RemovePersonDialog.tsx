import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2Icon as RemoveIcon } from "lucide-react";

export default function RemovePersonDialog() {
	return (
		<Dialog>
			<DialogTrigger>
				<RemoveIcon className="size-4 text-destructive" />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete
						your friend from the list
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}
