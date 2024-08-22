import { Input } from "@/components/ui/input";
import {
	FieldError,
	FieldValues,
	Path,
	RegisterOptions,
} from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputImagePreview from "../forms/InputImagePreview";
import { useImageUpload } from "@/lib/hooks/useImageUpload";

interface Props<T extends FieldValues> {
	icon: React.ReactNode;
	name: Path<T>;
	rules: RegisterOptions<T, Path<T>>;
	buttonText: string;
}
export default function InputGroupFile<T extends FieldValues>({
	icon,
	rules,
	name,
	buttonText,
}: Props<T>) {
	const { formControl, nativeControl } = useImageUpload<T>(name);
	const { register, errors, imageValue, onImageChange, trigger } = formControl;
	const { displayImage, displayImageLoading, inputImageRef } = nativeControl;

	return (
		<div aria-label="input-group" className="flex flex-col gap-2">
			<Input
				{...register(name, rules)}
				ref={inputImageRef}
				className="hidden"
				type="file"
				onChange={onImageChange}
			/>
			<Button
				onClick={() => inputImageRef.current?.click()}
				onBlur={() => trigger(name)}
				variant="outline"
				type="button"
			>
				<span className="size-4 mr-2">{icon}</span>
				{imageValue ? imageValue.name : buttonText}
			</Button>
			{errors[name] && (
				<p
					aria-label="input-error-message"
					className="text-sm text-destructive text-center"
				>
					{(errors[name] as FieldError).message}
				</p>
			)}
			<InputImagePreview
				displayImage={displayImage}
				displayImageLoading={displayImageLoading}
			/>
		</div>
	);
}
