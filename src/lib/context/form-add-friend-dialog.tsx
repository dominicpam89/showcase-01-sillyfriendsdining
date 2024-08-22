import { createContext } from "react";

export const ContextFormAddFriendDialog = createContext({
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
export default function ContextFormAddFriendDialogProvider({
	children,
	open,
	onOpenChange,
}: Props) {
	return (
		<ContextFormAddFriendDialog.Provider value={{ open, onOpenChange }}>
			{children}
		</ContextFormAddFriendDialog.Provider>
	);
}
