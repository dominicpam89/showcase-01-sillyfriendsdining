import { Input } from "@/components/ui/input";
import { FormAddFriendType } from "@/lib/definition/form-add-friend.definition";
import { Path, RegisterOptions } from "react-hook-form";
import { Button } from "@/components/ui/button";
import InputImagePreview from "../forms/InputImagePreview";
import { useImageUpload } from "@/lib/hooks/useImageUpload";

interface Props {
	icon: React.ReactNode;
	name: Path<FormAddFriendType>;
	rules: RegisterOptions<FormAddFriendType, Path<FormAddFriendType>>;
}
export default function InputGroupFile({ icon, rules, name }: Props) {
	const { formControl, nativeControl } = useImageUpload();
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
				{imageValue ? imageValue.name : "Upload your friend's poker face"}
			</Button>
			{errors.image && (
				<p
					aria-label="input-error-message"
					className="text-sm text-destructive text-center"
				>
					{errors.image.message}
				</p>
			)}
			<InputImagePreview
				displayImage={displayImage}
				displayImageLoading={displayImageLoading}
			/>
		</div>
	);
}
