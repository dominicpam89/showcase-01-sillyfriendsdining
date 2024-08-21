import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MockPersonType } from "@/lib/mock-data";
import FormBill from "../forms/FormBill";

interface Props {
	person: MockPersonType;
}
export default function ManageBillDrawer({ person }: Props) {
	return (
		<Drawer>
			<Button asChild variant="outline" className="w-3/12">
				<DrawerTrigger>Select</DrawerTrigger>
			</Button>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Manage Bill with {person.name}</DrawerTitle>
					<DrawerDescription>
						This action cannot be undone.
					</DrawerDescription>
				</DrawerHeader>
				<FormBill person={person} />
				<DrawerFooter>
					<Button>Submit</Button>
					<DrawerClose>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}
