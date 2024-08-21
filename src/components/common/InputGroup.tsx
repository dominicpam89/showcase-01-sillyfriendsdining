import { Input } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";
import {
	FieldValues,
	FieldError,
	Path,
	RegisterOptions,
	useFormContext,
} from "react-hook-form";
import { Label } from "@/components/ui/label";

interface InputGroupProps<T extends FieldValues> {
	icon: React.ReactNode;
	placeholder: string;
	inputType?: HTMLInputTypeAttribute;
	name: Path<T>;
	rules?: RegisterOptions<T, Path<T>>;
	label?: string;
}

export default function InputGroup<T extends FieldValues>({
	icon,
	placeholder,
	inputType = "text",
	name,
	rules,
	label,
}: InputGroupProps<T>) {
	const {
		register,
		formState: { errors },
	} = useFormContext<T>();

	return (
		<div aria-label="input-group" className="flex flex-col gap-2">
			{label && (
				<Label htmlFor={name} className="text-gray-500">
					{label}
				</Label>
			)}
			<div className="w-full flex gap-2 items-center">
				<span className="size-4">{icon}</span>
				<Input
					id={name}
					type={inputType}
					placeholder={placeholder}
					{...register(name, rules)}
				/>
			</div>
			{errors[name] && (
				<p className="text-sm text-destructive">
					{(errors[name] as FieldError)?.message}
				</p>
			)}
		</div>
	);
}
