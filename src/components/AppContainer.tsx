interface Props {
	children: React.ReactNode;
}
export default function AppContainer({ children }: Props) {
	return (
		<main className="p-4 flex flex-col w-full min-w-[480px] min-h-screen justify-center items-center overflow-auto">
			{children}
		</main>
	);
}
