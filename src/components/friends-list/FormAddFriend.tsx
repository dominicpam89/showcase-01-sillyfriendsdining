import { UsersRoundIcon, FileImageIcon } from "lucide-react";
import InputGroup from "../common/InputGroup";
import FormButtons from "../common/FormButtons";
import { useContext } from "react";
import { ContextFriendsList } from "@/lib/context/friend-list.context";

const iconClass = "w-full h-full";

export default function FormAddFriend() {
	const { viewFormAddFriend } = useContext(ContextFriendsList);
	if (viewFormAddFriend)
		return (
			<form name="add-friend" className="w-full mt-8 flex flex-col gap-4">
				<InputGroup
					icon={<UsersRoundIcon className={iconClass} />}
					placeholder="Your friend's name"
				/>
				<InputGroup
					icon={<FileImageIcon className={iconClass} />}
					placeholder="Image url"
				/>
				<FormButtons />
			</form>
		);
	else return null;
}
