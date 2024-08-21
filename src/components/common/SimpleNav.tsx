import { ContextGlobal } from "@/lib/context/global.context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";

export default function SimpleNav() {
	const { currentUser, logout } = useContext(ContextGlobal);
	const handleLogout = () => {
		logout();
	};
	return (
		<div
			aria-label="navbar"
			className="w-full p-8 px-12 flex justify-between items-center"
		>
			<h1 className="font-semibold">{currentUser?.email}</h1>
			<nav className="flex gap-4">
				<Button variant="link" onClick={handleLogout}>
					Logout
				</Button>
			</nav>
		</div>
	);
}
