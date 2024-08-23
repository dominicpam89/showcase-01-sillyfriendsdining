import { ContextGlobal } from "@/lib/context/global.context";
import { EditProfileSchemaType } from "@/lib/definition/form-edit-profile.definition";
import { useContext } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import InputGroup from "../common/InputGroup";
import {
	MailsIcon as EmailIcon,
	CircleSlash2Icon as NameIcon,
	FileImageIcon,
	LogOutIcon,
} from "lucide-react";
import InputGroupFile from "@/components/common/InputImage";
import { Button } from "@/components/ui/button";
import { useUpdateProfile } from "@/lib/hooks/useUpdateProfile";

const iconClass = "w-full h-full opacity-80";

const validationRuleName = {
	required: { value: true, message: "Even my freezer has a name!" },
	minLength: { value: 3, message: "Minimum character is 3" },
	maxLength: { value: 30, message: "Maximum characters is 30" },
	pattern: {
		value: /^[a-zA-Z]+$/,
		message: "Must contain only letter you dummy!",
	},
};

const validationRuleEmail = {
	pattern: {
		value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
		message: "Invalid email!",
	},
};

export default function FormEditProfile() {
	const { currentUser, logout } = useContext(ContextGlobal);
	const methods = useForm<EditProfileSchemaType>({
		mode: "onBlur",
		reValidateMode: "onChange",
		defaultValues: {
			firstName: currentUser?.displayName.split(" ")[0],
			lastName: currentUser?.displayName.split(" ")[1],
			email: currentUser?.email,
		},
	});
	const { isPending, onUpdateProfile } = useUpdateProfile();
	const onValid: SubmitHandler<EditProfileSchemaType> = (data) => {
		const displayName = data.firstName.concat(" ").concat(data.lastName);
		const { email, photo } = data;
		onUpdateProfile(displayName, email, photo);
	};
	return (
		<FormProvider {...methods}>
			<form
				aria-label="profile-menu-list"
				className="w-full flex flex-col gap-6"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<InputGroup<EditProfileSchemaType>
					name="firstName"
					label="First Name"
					placeholder="First Name"
					icon={<NameIcon className={iconClass} />}
					rules={validationRuleName}
					disabled={isPending}
				/>
				<InputGroup<EditProfileSchemaType>
					name="lastName"
					label="Last Name"
					placeholder="Last Name"
					icon={<NameIcon className={iconClass} />}
					rules={validationRuleName}
					disabled={isPending}
				/>
				<InputGroup<EditProfileSchemaType>
					name="email"
					label="Email"
					placeholder="Email"
					icon={<EmailIcon className={iconClass} />}
					rules={validationRuleEmail}
					disabled={isPending}
				/>

				<InputGroupFile<EditProfileSchemaType>
					buttonText="Update profile picture"
					icon={<FileImageIcon className="size-4" />}
					name="photo"
					buttonVariant="ghost"
					rules={{}}
				/>
				<div
					aria-label="profile-actions"
					className="w-full flex flex-col gap-2 items-center mt-12"
				>
					<Button className="w-full" type="submit" disabled={isPending}>
						Submit!
					</Button>
					<Button
						variant="link"
						onClick={logout}
						type="button"
						disabled={isPending}
					>
						<LogOutIcon className="mr-2 size-4" />
						Logout
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
