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

interface Props {
	person: FriendType;
}
export default function ManageBillDrawer({ person }: Props) {
	return (
		<Drawer>
			<Button asChild variant="outline" className="w-full">
				<DrawerTrigger>Update</DrawerTrigger>
			</Button>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Manage Bill with {person.name}</DrawerTitle>
					<DrawerDescription>
						Please be playful with your friend
					</DrawerDescription>
				</DrawerHeader>
				<FormBill person={person} />
				<DrawerFooter></DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
