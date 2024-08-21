import { createContext, PropsWithChildren, useState } from "react";

type ContextFriendsListType = {
	viewFormAddFriend: boolean;
	toggleViewForm: () => void;
	viewFormAddFriendHide: () => void;
	viewFormAddFriendShow: () => void;
};
export const ContextFriendsList = createContext<ContextFriendsListType>({
	viewFormAddFriend: false,
	toggleViewForm() {},
	viewFormAddFriendHide() {},
	viewFormAddFriendShow() {},
});

export default function ContextFriendsListProvider({
	children,
}: PropsWithChildren) {
	const [viewFormAddFriend, setViewFormAddFriend] = useState(false);
	const toggleViewForm = () => setViewFormAddFriend((ps) => !ps);
	const viewFormAddFriendHide = () => setViewFormAddFriend(false);
	const viewFormAddFriendShow = () => setViewFormAddFriend(true);
	return (
		<ContextFriendsList.Provider
			value={{
				toggleViewForm,
				viewFormAddFriend,
				viewFormAddFriendHide,
				viewFormAddFriendShow,
			}}
		>
			{children}
		</ContextFriendsList.Provider>
	);
}
