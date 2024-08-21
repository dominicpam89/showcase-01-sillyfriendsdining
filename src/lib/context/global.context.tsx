// src/context/ContextGlobalProvider.tsx

import { PropsWithChildren } from "react";
import useContextGlobal from "./global.context.hook";

import { createContext } from "react";
import { ContextState } from "./global.context.type";

/**
 * The initial state of the global authentication context.
 * It provides default values for all state properties and functions.
 *
 * @type {ContextState}
 */
const initialState: ContextState = {
	currentUser: null,
	loggedIn: false,

	/**
	 * Registers a new user using the provided data.
	 * This is a placeholder function in the initial state and will be replaced by the real function in the context provider.
	 *
	 * @param {RegisterSchemaType} data - The registration data.
	 */
	registerUser(data) {
		data;
	},

	/**
	 * Logs in a user using the provided data.
	 * This is a placeholder function in the initial state and will be replaced by the real function in the context provider.
	 *
	 * @param {LoginSchemaType} data - The login data.
	 */
	loginUser(data) {
		data;
	},

	/**
	 * Logs out the current user.
	 * This is a placeholder function in the initial state and will be replaced by the real function in the context provider.
	 */
	logout() {},
	authError: null,
	authLoading: false,
};

/**
 * Context for managing global authentication state.
 * It provides access to the current user's authentication status, loading state,
 * authentication error, and functions for registering, logging in, and logging out.
 *
 * @type {React.Context<ContextState>}
 */
export const ContextGlobal = createContext(initialState);

/**
 * Global context provider component for authentication state.
 * This component wraps its children with a Context Provider that supplies the authentication state and functions
 * managed by the `useContextGlobal` hook.
 *
 * @param {PropsWithChildren} props - The props for the provider component, including its children.
 * @returns {JSX.Element} The context provider component wrapping its children with authentication context.
 */
export default function ContextGlobalProvider({ children }: PropsWithChildren) {
	const hook = useContextGlobal();
	return (
		<ContextGlobal.Provider value={{ ...hook }}>
			{children}
		</ContextGlobal.Provider>
	);
}
