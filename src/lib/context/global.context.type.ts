import { User } from "firebase/auth";
import {
	LoginSchemaType,
	RegisterSchemaType,
} from "../definition/auth.definition";

export type UserState = null | User;

export type AuthErrorType = {
	name: string;
	message: string;
	additionalData: Array<string | {}>;
};

export type ContextState = {
	currentUser: UserState;
	loggedIn: boolean;
	registerUser(data: RegisterSchemaType): void;
	loginUser(data: LoginSchemaType): void;
	logout(): void;
	authError: AuthErrorType;
	authLoading: boolean;
};
