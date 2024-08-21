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
import { MockPersonType } from "@/lib/mock-data";
import FormBill from "../forms/FormBill";

interface Props {
	person: MockPersonType;
}
export default function ManageBillDrawer({ person }: Props) {
	return (
		<Drawer>
			<Button asChild variant="outline" className="w-full md:w-3/12">
				<DrawerTrigger>Select</DrawerTrigger>
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
