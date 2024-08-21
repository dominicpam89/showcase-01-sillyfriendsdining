import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	registerSchema,
	RegisterSchemaType as SchemaT,
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
import { useContext } from "react";
import { ContextGlobal } from "@/lib/context/global.context";
import { Spinner } from "@/components/ui/spinner";
import FormErrorsDialog from "./form-auth/FormErrorsDialog";

const iconClass = "w-full h-full opacity-80";

interface Props {
	switchTab: (val: string) => void;
}
export default function FormRegister({ switchTab }: Props) {
	const { registerUser, authLoading } = useContext(ContextGlobal);
	const methods = useForm<SchemaT>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			firstName: "Tracy",
			lastName: "Jackson",
			email: "tracyjackson91802938@gmail.com",
			password: "Tray!12345@",
			confirmationPassword: "Tray!12345@",
		},
		mode: "onBlur",
		reValidateMode: "onChange",
	});
	const onValid: SubmitHandler<SchemaT> = (data) => {
		registerUser(data);
	};
	return (
		<FormProvider {...methods}>
			<FormContainer
				name="auth-register-form"
				onSubmit={methods.handleSubmit(onValid)}
			>
				{authLoading && <Spinner size="large" />}
				<FormErrorsDialog />
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
					<InputGroup<SchemaT>
						icon={<NameIcon className={iconClass} />}
						name="firstName"
						placeholder="John"
					/>
					<InputGroup<SchemaT>
						icon={<NameIcon className={iconClass} />}
						name="lastName"
						placeholder="Doe"
					/>
				</div>
				<InputGroup<SchemaT>
					icon={<EmailIcon className={iconClass} />}
					name="email"
					placeholder="Email"
				/>
				<InputGroup<SchemaT>
					icon={<PasswordIcon className={iconClass} />}
					name="password"
					inputType="password"
					placeholder="Your Password"
				/>
				<InputGroup<SchemaT>
					icon={<KeyIcon className={iconClass} />}
					name="confirmationPassword"
					inputType="password"
					placeholder="Confirmation Password"
				/>
				<FormButtons<SchemaT> submitText="Let's Go!" />
			</FormContainer>
		</FormProvider>
	);
}
