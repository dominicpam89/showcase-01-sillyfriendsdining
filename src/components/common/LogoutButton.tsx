import { ContextGlobal } from "@/lib/context/global.context";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";

export default function LogoutButton() {
	const { logout } = useContext(ContextGlobal);
	return (
		<Button variant="link" size="icon" onClick={logout}>
			<LogOutIcon className="size-5" />
			<span>Logout</span>
		</Button>
	);
}
