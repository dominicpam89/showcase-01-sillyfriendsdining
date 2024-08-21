import {
	CircleDollarSignIcon as BillIcon,
	WalletIcon as ExpenseIcon,
	BanknoteIcon as FriendExpense,
	CircleUserIcon as WhoIcon,
} from "lucide-react";
import InputGroup from "../common/InputGroup";
import { MockPersonType } from "@/lib/mock-data";
import InputSelectGroup from "../common/InputSelectGroup";

const iconClass = "w-full h-full";

interface Props {
	person: MockPersonType;
}
export default function FormBill({ person }: Props) {
	return (
		<form aria-label="form-bill" className="flex flex-col gap-4">
			<InputGroup
				icon={<BillIcon className={iconClass} />}
				placeholder="Total Bill"
			/>
			<InputGroup
				icon={<ExpenseIcon className={iconClass} />}
				placeholder="Your Expense"
			/>
			<InputGroup
				icon={<FriendExpense className={iconClass} />}
				placeholder={`${person.name} expense`}
			/>
			<InputSelectGroup
				person={person}
				icon={<WhoIcon className={iconClass} />}
				placeholder="Who is paying the bill?"
			/>
		</form>
	);
}
