import { SheetTrigger } from "@/components/ui/sheet";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ContextGlobal } from "@/lib/context/global.context";
import { useContext } from "react";
import NavAvatar from "./NavAvatar";
import FormEditProfile from "../forms/FormEditProfile";
import { LogOutIcon } from "lucide-react";

export default function SimpleNav() {
	const { currentUser, logout } = useContext(ContextGlobal);
	return (
		<nav className="w-full flex gap-4 mb-6 items-center justify-end">
			<Sheet>
				<SheetTrigger>
					<NavAvatar />
				</SheetTrigger>
				<SheetContent className="flex flex-col justify-between">
					<SheetHeader className="p-6 flex flex-col items-center">
						<NavAvatar hoverAnimation={false} />
						<SheetTitle className="pt-4 text-center text-xl font-semibold">
							<span>Welcome </span>
							<span className="text-info font-bold">
								{currentUser?.displayName}!
							</span>
						</SheetTitle>
						<SheetDescription className="text-justify leading-6 pb-8">
							I don't know why you registered yourself in this app, but
							yes i would gladly to facilitate you to edit your profile
							here.{" "}
							<span className="text-info">
								Just fill in the form below!
							</span>
						</SheetDescription>
						<FormEditProfile />
					</SheetHeader>
					<Button
						variant="destructive"
						size="lg"
						className="mb-4 mx-4"
						onClick={logout}
					>
						<LogOutIcon className="mr-2 size-4" />
						Logout
					</Button>
				</SheetContent>
			</Sheet>
		</nav>
	);
}
