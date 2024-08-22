import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { FriendType } from "@/lib/definition/friends-list.type";
import React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";

interface Props<T extends FieldValues> {
	person: FriendType;
	placeholder: string;
	icon: React.ReactNode;
	name: Path<T>;
	control: Control<T>;
	disabled?: boolean;
}
export default function InputSelectGroup<T extends FieldValues>({
	person,
	placeholder,
	icon,
	name,
	control,
	disabled = false,
}: Props<T>) {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="w-full">
					<div className="flex gap-2">
						<span className="mt-2">{icon}</span>
						<Select
							onValueChange={field.onChange}
							defaultValue={field.value}
							disabled={disabled}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder={placeholder} />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectItem value="you">You</SelectItem>
								<SelectItem value={person.id.toString()}>
									{person.name}
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
}
