import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HTMLInputTypeAttribute, useState } from "react";
import {
	FieldValues,
	FieldError,
	Path,
	RegisterOptions,
	useFormContext,
} from "react-hook-form";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

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
	const [showPass, setShowPass] = useState(false);
	const togglePass = () => setShowPass(!showPass);
	return (
		<div aria-label="input-group" className="flex flex-col gap-2">
			{label && (
				<Label htmlFor={name} className="text-gray-500">
					{label}
				</Label>
			)}
			<div className="w-full flex gap-2 items-center">
				<span className="size-4 relative">{icon}</span>
				{inputType !== "password" && (
					<Input
						id={name}
						type={inputType}
						placeholder={placeholder}
						{...register(name, rules)}
					/>
				)}
				{inputType == "password" && (
					<Input
						id={name}
						type={showPass ? "text" : "password"}
						placeholder={placeholder}
						{...register(name, rules)}
					/>
				)}
				{inputType == "password" && (
					<Button
						onClick={togglePass}
						variant="outline"
						size="icon"
						type="button"
					>
						{showPass ? (
							<EyeOffIcon className="size-5" />
						) : (
							<EyeIcon className="size-5" />
						)}
					</Button>
				)}
			</div>
			{errors[name] && (
				<p className="text-sm text-destructive">
					{(errors[name] as FieldError)?.message}
				</p>
			)}
		</div>
	);
}
