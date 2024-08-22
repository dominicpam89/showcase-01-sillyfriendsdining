import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ContextGlobal } from "@/lib/context/global.context";
import { useContext } from "react";

interface Props {
	hoverAnimation?: boolean;
}
export default function NavAvatar({ hoverAnimation = true }: Props) {
	const { currentUser } = useContext(ContextGlobal);
	const style = hoverAnimation ? "transition-default hover:scale-110" : "";
	return (
		<Avatar className={`size-16 ${style}`}>
			<AvatarImage src={currentUser?.photoURL?.toString()} />
			<AvatarFallback className="font-bold text-2xl">
				{currentUser?.displayName.charAt(0).toUpperCase()}
			</AvatarFallback>
		</Avatar>
	);
}
