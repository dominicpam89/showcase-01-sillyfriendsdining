import { User, AuthError } from "firebase/auth";
import {
	LoginSchemaType,
	RegisterSchemaType,
} from "../definition/auth.definition";

/**
 * Represents the current authenticated user state.
 * It can be either a Firebase User object or null if no user is logged in.
 */
export type UserState = null | User;

/**
 * Represents a validation error with an array of error messages and a name indicating the type of error.
 * @typedef {Object} ValidationErrorType
 * @property {string[]} messages - The array of validation error messages.
 * @property {string} name - The name indicating the type of validation error.
 */
export type ValidationErrorType = { messages: string[]; name: string };

/**
 * Represents an authentication error, which can be either a Firebase AuthError object or a validation error.
 * @typedef {AuthError | null | ValidationErrorType} AuthErrorType
 */
export type AuthErrorType = AuthError | null | ValidationErrorType;

/**
 * Defines the structure of the global authentication context state.
 * @type {Object} ContextState
 * @property {UserState} currentUser - The currently authenticated user.
 * @property {boolean} loggedIn - Indicates if a user is logged in.
 * @property {(data: RegisterSchemaType) => void} registerUser - Function to register a new user.
 * @property {(data: LoginSchemaType) => void} loginUser - Function to log in a user.
 * @property {() => void} logout - Function to log out the current user.
 * @property {AuthErrorType} authError - The current authentication error state.
 * @property {boolean} authLoading - Indicates if an authentication operation is in progress.
 */
export type ContextState = {
	currentUser: UserState;
	loggedIn: boolean;
	registerUser(data: RegisterSchemaType): void;
	loginUser(data: LoginSchemaType): void;
	logout(): void;
	authError: AuthErrorType;
	authLoading: boolean;
};
