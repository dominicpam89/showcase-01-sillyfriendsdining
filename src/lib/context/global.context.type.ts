import {
	LoginSchemaType,
	RegisterSchemaType,
} from "../definition/auth.definition";

export type AuthenticatedUserType = {
	uid: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	photoURL: string | null;
};

export type AuthErrorType = {
	name: string;
	message: string;
	additionalData: Array<string | {}>;
};

export type ContextState = {
	currentUser: AuthenticatedUserType | null;
	loggedIn: boolean;
	registerUser(data: RegisterSchemaType): void;
	loginUser(data: LoginSchemaType): void;
	logout(): void;
	isError: boolean;
	authError: AuthErrorType;
	authLoading: boolean;
	onTriggerState: () => void;
};
