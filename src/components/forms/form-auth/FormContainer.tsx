interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
	children: React.ReactNode;
}
export default function FormContainer({ children, ...props }: Props) {
	return (
		<form
			{...props}
			className="mx-auto w-full max-w-lg p-8 flex flex-col gap-6"
		>
			{children}
		</form>
	);
}
