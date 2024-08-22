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

export default function RemovePersonDialog() {
	return (
		<Dialog>
			<DialogTrigger>
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
					<Button variant="link" className="w-full">
						I don't care, i don't think this person is my friend anyway!
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
