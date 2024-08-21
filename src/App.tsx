import AppContainer from "@/components/AppContainer";
import FormAddFriend from "@/components/friends-list/FormAddFriend";
import FriendsList from "@/components/FriendsList";
import ContextFriendsListProvider from "@/lib/context/friend-list.context";

const App = () => {
	return (
		<AppContainer>
			<ContextFriendsListProvider>
				<FriendsList />
				<FormAddFriend />
			</ContextFriendsListProvider>
		</AppContainer>
	);
};

export default App;
