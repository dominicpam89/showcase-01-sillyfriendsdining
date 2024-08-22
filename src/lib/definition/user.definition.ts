export type AuthenticatedUserType = {
	uid: string;
	name: string;
	email: string;
	emailVerified: boolean;
	photoURL: string | null;
};
