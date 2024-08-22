import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer-main";
import { Button } from "@/components/ui/button";
import { FriendType } from "@/lib/definition/friends-list.type.ts";
import FormBill from "../forms/FormBill";
import { useDialog } from "@/lib/hooks/useDialog";
import ContextDialogProvider from "@/lib/context/dialog.context";

interface Props {
	person: FriendType;
}
export default function ManageBillDrawer({ person }: Props) {
	const { open, onOpenChange } = useDialog();
	return (
		<Drawer open={open} onOpenChange={onOpenChange}>
			<Button asChild variant="outline" className="w-full">
				<DrawerTrigger onClick={() => onOpenChange(true)}>
					Update
				</DrawerTrigger>
			</Button>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Manage Bill with {person.name}</DrawerTitle>
					<DrawerDescription>
						Please be playful with your friend
					</DrawerDescription>
				</DrawerHeader>
				<ContextDialogProvider open={open} onOpenChange={onOpenChange}>
					<FormBill person={person} />
				</ContextDialogProvider>
				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
