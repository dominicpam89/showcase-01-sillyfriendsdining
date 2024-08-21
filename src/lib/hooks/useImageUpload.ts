import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { FormAddFriendType } from "@/lib/definition/form-add-friend.definition";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 5MB

export function useImageUpload() {
	const {
		register,
		setError,
		setValue,
		clearErrors,
		getValues,
		trigger,
		watch,
		formState: { errors },
	} = useFormContext<FormAddFriendType>();
	const inputImageRef = useRef<HTMLInputElement>(null);

	// upload image state
	const [displayImage, setDisplayImage] = useState<
		ArrayBuffer | string | null
	>(null);
	const [displayImageLoading, setDisplayImageLoading] = useState(false);
	const validateImage = (target: File | undefined) => {
		if (!target) {
			setError("image", { message: "No file is selected", type: "custom" });
			return undefined;
		}
		if (
			!["image/png", "image/jpeg", "image/jpg"].includes(target.type) ||
			target.size > MAX_FILE_SIZE
		) {
			setError("image", {
				message:
					target.size > MAX_FILE_SIZE
						? "File size must be less than 5MB"
						: "File must be jpeg, jpg, or png",
				type: "custom",
			});
			return undefined;
		}
		return target;
	};

	const handleFileRead = (fileReader: FileReader, target: File) => {
		fileReader.onloadstart = () => setDisplayImageLoading(true);
		fileReader.onloadend = () => setDisplayImageLoading(false);
		fileReader.onload = () => {
			setValue("image", target);
			setDisplayImage(fileReader.result);
			clearErrors("image");
		};
		fileReader.readAsDataURL(target);
	};

	const onImageChange = (ev: ChangeEvent<HTMLInputElement>) => {
		const target = ev.target.files?.[0];
		const validatedTarget = validateImage(target);
		if (validatedTarget) {
			const fileReader = new FileReader();
			handleFileRead(fileReader, validatedTarget);
		} else {
			setDisplayImage(null);
			setValue("image", undefined);
		}
	};

	const imageValue = getValues("image");

	useEffect(() => {
		const subscription = watch((value) => {
			if ("image" === "image" && value.image) {
				const fileReader = new FileReader();
				fileReader.onload = () => setDisplayImage(fileReader.result);
				fileReader.readAsDataURL(value.image);
			} else {
				setDisplayImage(null);
			}
		});
		return () => subscription.unsubscribe();
	}, [watch]);

	return {
		nativeControl: {
			inputImageRef,
			displayImage,
			displayImageLoading,
		},
		formControl: {
			onImageChange,
			register,
			trigger,
			getValues,
			errors,
			imageValue,
		},
	};
}
