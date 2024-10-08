export type FriendType = {
	id: string;
	name: string;
	image: string;
	balance: number;
	bill: number;
	uid: string; // user id of authenticated user
};

export type FriendsListType = Array<FriendType>;
