import { SheetTrigger } from "@/components/ui/sheet";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { ContextGlobal } from "@/lib/context/global.context";
import { useContext } from "react";
import NavAvatar from "./NavAvatar";
import FormEditProfile from "../forms/FormEditProfile";
import { ToggleTheme } from "./ToggleTheme";

export default function SimpleNav() {
	const { currentUser } = useContext(ContextGlobal);
	return (
		<nav className="w-full flex gap-4 mb-6 md:px-8 md:pt-4 items-center justify-between">
			<ToggleTheme />
			<Sheet>
				<SheetTrigger>
					<NavAvatar />
				</SheetTrigger>
				<SheetContent className="min-w-[320px] flex flex-col justify-between overflow-scroll">
					<SheetHeader className="p-3 sm:p-6 flex flex-col items-center">
						<NavAvatar hoverAnimation={false} />
						<SheetTitle className="pt-4 text-center text-xl font-semibold">
							<span>Welcome </span>
							<span className="text-info font-bold">
								{currentUser?.displayName}!
							</span>
						</SheetTitle>
						<SheetDescription className="text-justify text-xs leading-5 pb-8">
							I don't know why you registered yourself in this app, but
							yes i'm obliged to facilitate editing profile.{" "}
							<span className="text-info">
								Just fill in the form below!
							</span>
						</SheetDescription>
						<FormEditProfile />
					</SheetHeader>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
