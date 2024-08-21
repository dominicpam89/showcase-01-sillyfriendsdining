import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "@/lib/definition/auth.definition";
import InputGroup from "../common/InputGroup";
import {
	MailsIcon as EmailIcon,
	KeySquareIcon as PasswordIcon,
} from "lucide-react";
import FormButtons from "../common/FormButtons";
import FormAuthSwitch from "./form-auth/FormAuthSwitch";
import FormContainer from "./form-auth/FormContainer";

const iconClass = "w-full h-full opacity-80";

interface Props {
	switchTab: (val: string) => void;
}
export default function FormLogin({ switchTab }: Props) {
	const methods = useForm<LoginSchemaType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	const onValid: SubmitHandler<LoginSchemaType> = (data) => {
		console.log(data);
	};
	return (
		<FormProvider {...methods}>
			<FormContainer
				name="auth-login-form"
				onSubmit={methods.handleSubmit(onValid)}
			>
				<div aria-label="form-heading" className="text-center space-y-2">
					<h1 className="text-xl font-bold">Surprising</h1>
					<p className="font-light">
						You do really have account here? Ridiculous!{" "}
						<FormAuthSwitch
							switchTab={switchTab}
							text="Anyway, go here if you aren't registered"
							val="register"
						/>
					</p>
				</div>
				<InputGroup<LoginSchemaType>
					icon={<EmailIcon className={iconClass} />}
					name="email"
					placeholder="Email"
				/>
				<InputGroup<LoginSchemaType>
					icon={<PasswordIcon className={iconClass} />}
					name="password"
					inputType="password"
					placeholder="Your Password"
				/>
				<FormButtons />
			</FormContainer>
		</FormProvider>
	);
}
