// src/hooks/useContextGlobal.ts

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

const useContextGlobal = () => {
	const [authLoading, setAuthLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState<UserState>(null);
	const [authError, setAuthError] = useState<AuthErrorType>({
		additionalData: [],
		message: "",
		name: "",
	});

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setLoggedIn(true);
			} else setCurrentUser(null);
		});
		return unsubscribe;
	}, []);

	const registerUser = async (data: RegisterSchemaType) => {
		setAuthLoading(true);
		const validated = registerSchema.safeParse(data);
		if (validated.error) {
			const messages = validated.error.errors.map((err) => err.message);
			setAuthError({
				name: "validation",
				additionalData: messages,
				message: "validation errors",
			});
			return;
		}
		try {
			await firebaseRegisterUser(data);
		} catch (error) {
			console.error(error);
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
			setAuthError({
				additionalData: messages,
				name: "validation",
				message: "validation errors",
			});
			return;
		}
		try {
			await firebaseLogin(data);
		} catch (error) {
			console.error(error);
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
		} catch (error) {
			console.error("Error logging out", error);
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
	};
};

export default useContextGlobal;
