import { UsersRoundIcon, FileImageIcon } from "lucide-react";
import InputGroup from "../common/InputGroup";
import FormButtons from "../common/FormButtons";

const iconClass = "w-full h-full";

export default function FormAddFriend() {
	return (
		<form
			name="add-friend"
			className="max-w-lg w-full mt-8 flex flex-col gap-4"
		>
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
}
