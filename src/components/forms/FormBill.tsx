import {
	CircleDollarSignIcon as BillIcon,
	WalletIcon as ExpenseIcon,
	BanknoteIcon as FriendExpense,
	CircleUserIcon as WhoIcon,
} from "lucide-react";
import InputGroup from "../common/InputGroup";
import { MockPersonType } from "@/lib/mock-data";
import InputSelectGroup from "../common/InputSelectGroup";

interface Props {
	person: MockPersonType;
}
export default function FormBill({ person }: Props) {
	return (
		<form aria-label="form-bill">
			<InputGroup icon={<BillIcon />} placeholder="Total Bill" />
			<InputGroup icon={<ExpenseIcon />} placeholder="Your Expense" />
			<InputGroup
				icon={<FriendExpense />}
				placeholder={`${person.name} expense`}
			/>
			<InputSelectGroup
				person={person}
				icon={<WhoIcon />}
				placeholder="Who is paying the bill?"
			/>
		</form>
	);
}
