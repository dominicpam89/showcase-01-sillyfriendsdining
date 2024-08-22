import { UsersRoundIcon, FileImageIcon } from "lucide-react";
import InputGroup from "../common/InputGroup";
import FormButtons from "../common/FormButtons";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { FormAddFriendType as SchemaT } from "@/lib/definition/form-add-friend.definition";
import InputImage from "../common/InputImage";
import { useAddFriend } from "@/lib/hooks/useAddFriend";
import { Spinner } from "@/components/ui/spinner";

const iconClass = "w-full h-full";

export default function FormAddFriend() {
	const methods = useForm<SchemaT>({
		mode: "onBlur",
		reValidateMode: "onChange",
	});
	const { isPending, onAddFriend } = useAddFriend();
	const onValid: SubmitHandler<SchemaT> = (data) => {
		onAddFriend(data);
	};
	return (
		<FormProvider {...methods}>
			<form
				name="add-friend"
				className="max-w-lg w-full mt-8 flex flex-col gap-4"
				onSubmit={methods.handleSubmit(onValid)}
			>
				{isPending && <Spinner />}
				<InputGroup<SchemaT>
					icon={<UsersRoundIcon className={iconClass} />}
					placeholder="Your friend's name"
					name="name"
					rules={{
						required: {
							value: true,
							message: "Name is required!",
						},
						min: {
							value: 3,
							message:
								"Why your friend's name is too short? A name must be minimum 3!",
						},
						max: {
							value: 30,
							message:
								"Why your friend's name is too long? Maximum is 30!",
						},
					}}
					disabled={isPending}
				/>
				<InputImage<SchemaT>
					icon={<FileImageIcon className={iconClass} />}
					name="image"
					rules={{
						required: {
							value: true,
							message: "image is required",
						},
					}}
					buttonText="Upload your friend's poker face"
					disabled={isPending}
				/>
				<FormButtons<SchemaT>
					submitText="Add Friend"
					disabled={isPending}
				/>
			</form>
		</FormProvider>
	);
}
