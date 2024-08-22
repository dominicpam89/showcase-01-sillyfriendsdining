import {
	CircleDollarSignIcon as BillIcon,
	WalletIcon as ExpenseIcon,
	BanknoteIcon as FriendExpense,
	CircleUserIcon as WhoIcon,
} from "lucide-react";
import InputGroup from "../common/InputGroup";
import { FriendType } from "@/lib/definition/friends-list.type";
import InputSelectGroup from "../common/InputSelectGroup";
import { SubmitHandler, useForm, FormProvider } from "react-hook-form";
import {
	FormBillSchemaType,
	formBillSchema,
} from "@/lib/definition/form-bill.definition";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { DrawerClose } from "../ui/drawer-main";
import { useManageBill } from "@/lib/hooks/useManageBill";

const iconClass = "w-full h-full";

interface Props {
	person: FriendType;
}
export default function FormBill({ person }: Props) {
	const { onUpdateFriend, isPending } = useManageBill(person.id);
	const methods = useForm<FormBillSchemaType>({
		mode: "onBlur",
		reValidateMode: "onChange",
		resolver: zodResolver(formBillSchema),
		defaultValues: {
			bill: "100" as any,
			expense: "10" as any,
			friendExpense: "90" as any,
			selectPerson: "you",
		},
	});
	const onValid: SubmitHandler<FormBillSchemaType> = ({
		bill,
		expense,
		friendExpense,
		selectPerson,
	}) => {
		let balance = bill / 2;
		if (selectPerson == "you") {
			balance = expense - balance;
		} else {
			balance -= friendExpense;
		}
		onUpdateFriend(balance);
	};
	const personWhoPay = methods.watch("selectPerson");
	return (
		<FormProvider {...methods}>
			<form
				aria-label="form-bill"
				className="flex flex-col gap-4 w-full max-w-xl mx-auto"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<InputGroup<FormBillSchemaType>
					icon={<BillIcon className={iconClass} />}
					placeholder="Total Bill"
					inputType="number"
					name="bill"
					label="Total Bill"
					disabled={isPending}
				/>
				{personWhoPay == "you" && (
					<InputGroup<FormBillSchemaType>
						icon={<ExpenseIcon className={iconClass} />}
						placeholder="Your Expense"
						inputType="number"
						name="expense"
						label="Your Expense"
						disabled={isPending}
					/>
				)}
				{personWhoPay != "you" && (
					<InputGroup<FormBillSchemaType>
						icon={<FriendExpense className={iconClass} />}
						placeholder={`${person.name} expense`}
						inputType="number"
						name="friendExpense"
						label={`${person.name}'s expense`}
						disabled={isPending}
					/>
				)}
				<InputSelectGroup<FormBillSchemaType>
					person={person}
					icon={<WhoIcon className="size-4" />}
					label="Who is paying the bill?"
					placeholder="Who is paying the bill?"
					name="selectPerson"
					control={methods.control}
					disabled={isPending}
				/>
				<div className="mt-6 flex gap-2">
					<Button asChild variant="outline" disabled={isPending}>
						<DrawerClose type="button" className="w-full">
							Cancel
						</DrawerClose>
					</Button>
					<Button className="w-full" type="submit" disabled={isPending}>
						Split the Bill
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
