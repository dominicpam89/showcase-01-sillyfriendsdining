interface Props {
	children: React.ReactNode;
}
export default function AppContainer({ children }: Props) {
	return (
		<main className="p-6 flex flex-col w-full min-w-[320px] min-h-screen justify-center items-center overflow-auto">
			{children}
		</main>
	);
}