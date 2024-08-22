interface Props {
	children: React.ReactNode;
}
export default function AppContainer({ children }: Props) {
	return (
		<main className="p-4 flex flex-col w-full min-w-[320px] min-h-screen items-center overflow-scroll">
			{children}
		</main>
	);
}
