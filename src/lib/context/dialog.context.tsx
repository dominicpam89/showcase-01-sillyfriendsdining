import { createContext } from "react";

export const ContextDialog = createContext({
	open: false,
	onOpenChange: (o: boolean) => {
		o;
	},
});

interface Props {
	children: React.ReactNode;
	open: boolean;
	onOpenChange: (o: boolean) => void;
}
export default function ContextDialogProvider({
	children,
	open,
	onOpenChange,
}: Props) {
	return (
		<ContextDialog.Provider value={{ open, onOpenChange }}>
			{children}
		</ContextDialog.Provider>
	);
}
