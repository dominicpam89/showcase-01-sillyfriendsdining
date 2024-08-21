import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
	LoginSchemaType,
	RegisterSchemaType,
	loginSchema,
	registerSchema,
} from "../definition/auth.definition";
import { firebaseRegisterUser } from "../services/firebase-register";
import { firebaseLogin } from "../services/firebase-login";
import { UserState, AuthErrorType } from "./global.context.type";

const initAuthError = {
	additionalData: [],
	message: "",
	name: "",
};

const useContextGlobal = () => {
	const [authLoading, setAuthLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState<UserState>(null);
	const [isError, setIsError] = useState(false);
	const [authError, setAuthError] = useState<AuthErrorType>(initAuthError);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setLoggedIn(true);
			} else {
				setCurrentUser(null);
				setLoggedIn(false);
			}
		});
		return unsubscribe;
	}, [auth]);

	const registerUser = async (data: RegisterSchemaType) => {
		setAuthLoading(true);
		const validated = registerSchema.safeParse(data);
		if (validated.error) {
			const messages = validated.error.errors.map((err) => err.message);
			setIsError(true);
			setAuthError({
				name: "validation",
				additionalData: messages,
				message: "validation errors",
			});
			return;
		} else setIsError(false);
		try {
			await firebaseRegisterUser(data);
			setIsError(false);
		} catch (error) {
			console.error(error);
			setIsError(true);
			setAuthError({
				name: "firebase auth",
				message: "Failed to register user",
				additionalData: [],
			});
		} finally {
			setAuthLoading(false);
		}
	};

	const loginUser = async (data: LoginSchemaType) => {
		setAuthLoading(true);
		const validated = loginSchema.safeParse(data);
		if (validated.error) {
			const messages = validated.error.errors.map((err) => err.message);
			setIsError(true);
			setAuthError({
				additionalData: messages,
				name: "validation",
				message: "validation errors",
			});
			return;
		} else setIsError(false);
		try {
			await firebaseLogin(data);
			setIsError(false);
		} catch (error) {
			console.error(error);
			setIsError(true);
			setAuthError({
				name: "firebase auth",
				message: "user failed to login",
				additionalData: [],
			});
		} finally {
			setAuthLoading(false);
		}
	};

	const logout = async () => {
		setAuthLoading(true);
		try {
			await signOut(auth);
			setIsError(false);
		} catch (error) {
			console.error("Error logging out", error);
			setIsError(true);
			setAuthError({
				name: "firebase auth",
				message: "Failed to logout",
				additionalData: [],
			});
		} finally {
			setAuthLoading(false);
		}
	};

	return {
		loggedIn,
		registerUser,
		loginUser,
		logout,
		currentUser,
		authError,
		authLoading,
		isError,
	};
};

export default useContextGlobal;
