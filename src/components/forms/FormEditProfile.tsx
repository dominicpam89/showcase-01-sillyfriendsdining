import { ContextGlobal } from "@/lib/context/global.context";
import {
	EditProfileSchemaType,
	emailValidator,
	firstNameValidator,
	lastNameValidator,
} from "@/lib/definition/form-edit-profile.definition";
import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import InputGroup from "../common/InputGroup";
import {
	MailsIcon as EmailIcon,
	CircleSlash2Icon as NameIcon,
	FileImageIcon,
	LogOutIcon,
} from "lucide-react";
import InputGroupFile from "@/components/common/InputImage";
import { Button } from "@/components/ui/button";

const iconClass = "w-full h-full opacity-80";

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
	return (
		<FormProvider {...methods}>
			<form
				aria-label="profile-menu-list"
				className="w-full flex flex-col gap-6"
			>
				<InputGroup<EditProfileSchemaType>
					name="firstName"
					label="First Name"
					placeholder="First Name"
					icon={<NameIcon className={iconClass} />}
					rules={{
						validate: (val) => {
							const result = firstNameValidator.safeParse(val);
							if (result.error) {
								methods.setError("firstName", {
									type: "manual",
									message: result.error.issues[0].message,
								});
								return false;
							}
							return true;
						},
					}}
				/>
				<InputGroup<EditProfileSchemaType>
					name="lastName"
					label="Last Name"
					placeholder="Last Name"
					icon={<NameIcon className={iconClass} />}
					rules={{
						validate: (val) => {
							const result = lastNameValidator.safeParse(val);
							if (result.error) {
								methods.setError("lastName", {
									type: "manual",
									message: result.error.issues[0].message,
								});
								return false;
							}
							return true;
						},
					}}
				/>
				<InputGroup<EditProfileSchemaType>
					name="email"
					label="Email"
					placeholder="Email"
					icon={<EmailIcon className={iconClass} />}
					rules={{
						validate: (val) => {
							const result = emailValidator.safeParse(val);
							if (result.error) {
								methods.setError("email", {
									type: "manual",
									message: result.error.issues[0].message,
								});
								return false;
							}
							return true;
						},
					}}
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
					<Button className="w-full" type="submit">
						Submit!
					</Button>
					<Button variant="link" onClick={logout} type="button">
						<LogOutIcon className="mr-2 size-4" />
						Logout
					</Button>
				</div>
			</form>
		</FormProvider>
	);
}
