import { PropsWithChildren } from "react";
import useContextGlobal from "./global.context.hook";

import { createContext } from "react";
import { AuthErrorType, ContextState } from "./global.context.type";

const initialState: ContextState = {
	currentUser: null,
	loggedIn: false,

	registerUser(data) {
		data;
	},
	loginUser(data) {
		data;
	},
	logout() {},

	isError: false,
	authError: {
		additionalData: [],
		message: "",
		name: "",
	} satisfies AuthErrorType,

	authLoading: false,
};

export const ContextGlobal = createContext(initialState);

export default function ContextGlobalProvider({ children }: PropsWithChildren) {
	const hook = useContextGlobal();
	return (
		<ContextGlobal.Provider value={{ ...hook }}>
			{children}
		</ContextGlobal.Provider>
	);
}
