import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	RegisterSchemaType,
} from "@/lib/definition/auth.definition";
import InputGroup from "../common/InputGroup";
import {
	MailsIcon as EmailIcon,
	KeySquareIcon as PasswordIcon,
	CircleSlash2Icon as NameIcon,
	KeyIcon,
} from "lucide-react";
import FormButtons from "../common/FormButtons";
import FormAuthSwitch from "./form-auth/FormAuthSwitch";
import FormContainer from "./form-auth/FormContainer";

const iconClass = "w-full h-full opacity-80";

interface Props {
	switchTab: (val: string) => void;
}
export default function FormRegister({ switchTab }: Props) {
	const methods = useForm<RegisterSchemaType>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			confirmationPassword: "",
		},
	});
	const onValid: SubmitHandler<RegisterSchemaType> = (data) => {
		console.log(data);
	};
	return (
		<FormProvider {...methods}>
			<FormContainer
				name="auth-register-form"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<div aria-label="form-heading" className="text-center space-y-2">
					<h1 className="text-xl font-bold">Register Form</h1>
					<p className="font-light">
						Register your account for this useless app, or do you{" "}
						<FormAuthSwitch
							switchTab={switchTab}
							text="already have account?"
							val="login"
						/>
					</p>
				</div>
				<div className="flex gap-2">
					<InputGroup<RegisterSchemaType>
						icon={<NameIcon className={iconClass} />}
						name="firstName"
						placeholder="John"
					/>
					<InputGroup<RegisterSchemaType>
						icon={<NameIcon className={iconClass} />}
						name="lastName"
						placeholder="Doe"
					/>
				</div>
				<InputGroup<RegisterSchemaType>
					icon={<EmailIcon className={iconClass} />}
					name="email"
					placeholder="Email"
				/>
				<InputGroup<RegisterSchemaType>
					icon={<PasswordIcon className={iconClass} />}
					name="password"
					inputType="password"
					placeholder="Your Password"
				/>
				<InputGroup<RegisterSchemaType>
					icon={<KeyIcon className={iconClass} />}
					name="confirmationPassword"
					inputType="password"
					placeholder="Confirmation Password"
				/>
				<FormButtons />
			</FormContainer>
		</FormProvider>
	);
}
