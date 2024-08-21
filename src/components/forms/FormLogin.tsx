import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	loginSchema,
	LoginSchemaType as SchemaT,
} from "@/lib/definition/auth.definition";
import InputGroup from "../common/InputGroup";
import {
	MailsIcon as EmailIcon,
	KeySquareIcon as PasswordIcon,
} from "lucide-react";
import FormButtons from "../common/FormButtons";
import FormAuthSwitch from "./form-auth/FormAuthSwitch";
import FormContainer from "./form-auth/FormContainer";
import { useContext } from "react";
import { ContextGlobal } from "@/lib/context/global.context";
import { Spinner } from "../ui/spinner";
import FormErrorsDialog from "./form-auth/FormErrorsDialog";

const iconClass = "w-full h-full opacity-80";

interface Props {
	switchTab: (val: string) => void;
}
export default function FormLogin({ switchTab }: Props) {
	const { authLoading, loginUser } = useContext(ContextGlobal);
	const methods = useForm<SchemaT>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "tracyjackson91802938@gmail.com",
			password: "Tray!12345@",
		},
		mode: "onBlur",
		reValidateMode: "onChange",
	});
	const onValid: SubmitHandler<SchemaT> = (data) => {
		loginUser(data);
	};
	return (
		<FormProvider {...methods}>
			<FormContainer
				name="auth-login-form"
				onSubmit={methods.handleSubmit(onValid)}
			>
				{authLoading && <Spinner size="large" />}
				<FormErrorsDialog />
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
				<FormButtons<SchemaT> submitText="Let's Go!" />
			</FormContainer>
		</FormProvider>
	);
}
