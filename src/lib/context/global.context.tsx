import { createContext, PropsWithChildren, useState } from "react";

export type ContextGlobalType = {
	loggedIn: boolean;
	register: () => void;
	login: () => void;
	logout: () => void;
};
export const ContextGlobal = createContext<ContextGlobalType>({
	loggedIn: false,
	register() {},
	login() {},
	logout() {},
});

const useContextGlobal = () => {
	const [loggedIn] = useState(false);
	const register = () => {};
	const login = () => {};
	const logout = () => {};
	return {
		loggedIn,
		register,
		login,
		logout,
	};
};

export default function ContextGlobalProvider({ children }: PropsWithChildren) {
	const hook = useContextGlobal();
	return (
		<ContextGlobal.Provider value={{ ...hook }}>
			{children}
		</ContextGlobal.Provider>
	);
}
