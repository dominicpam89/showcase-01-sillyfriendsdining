export const mockpeople = [
	{
		id: 1,
		name: "Sarah Buldozer",
		image: `https://i.pravatar.cc/150?img=${1}`,
		balance: 30,
	},
	{
		id: 2,
		name: "George DC",
		image: `https://i.pravatar.cc/150?img=${2}`,
		balance: 0,
	},
	{
		id: 3,
		name: "Weather Guy",
		image: `https://i.pravatar.cc/150?img=${3}`,
		balance: -7,
	},
	{
		id: 4,
		name: "Unlimited Winston",
		image: `https://i.pravatar.cc/150?img=${4}`,
		balance: 5,
	},
];

export type FriendType = (typeof mockpeople)[0];
