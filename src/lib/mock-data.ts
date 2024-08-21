export const mockpeople = [
	{
		id: 19237,
		name: "Sarah Buldozer",
		image: "https://i.pravatar.cc/150?img=1",
		balance: 30,
	},
	{
		id: 21097,
		name: "George DC",
		image: "https://i.pravatar.cc/150?img=2",
		balance: 0,
	},
	{
		id: 76931,
		name: "Weather Guy",
		image: "https://i.pravatar.cc/150?img=3",
		balance: -7,
	},
	{
		id: 86709,
		name: "Unlimited Winston",
		image: "https://i.pravatar.cc/150?img=4",
		balance: 5,
	},
];

export type MockPersonType = (typeof mockpeople)[0];
