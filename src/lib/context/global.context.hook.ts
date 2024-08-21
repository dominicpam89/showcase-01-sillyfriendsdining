// src/hooks/useContextGlobal.ts

import { useState, useEffect } from "react";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged, AuthError, signOut } from "firebase/auth";
import {
	LoginSchemaType,
	RegisterSchemaType,
	loginSchema,
	registerSchema,
} from "../definition/auth.definition";
import { firebaseRegisterUser } from "../services/firebase-register";
import { firebaseLogin } from "../services/firebase-login";
import { UserState, AuthErrorType } from "./global.context.type";

/**
 * Custom hook to manage global authentication state.
 * This hook provides state and functions to handle user registration, login, logout,
 * and authentication status using Firebase.
 *
 * @returns {{
 *  loggedIn: boolean,
 *  registerUser: (data: RegisterSchemaType) => Promise<void>,
 *  loginUser: (data: LoginSchemaType) => Promise<void>,
 *  logout: () => Promise<void>,
 *  currentUser: UserState,
 *  authError: AuthErrorType,
 *  authLoading: boolean
 * }} The authentication state and functions.
 */
const useContextGlobal = () => {
	const [authLoading, setAuthLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState<UserState>(null);
	const [authError, setAuthError] = useState<AuthErrorType>(null);

	/**
	 * Subscribe to Firebase authentication state changes.
	 * Updates the currentUser and loggedIn state based on the user's authentication status.
	 */
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setCurrentUser(user);
				setLoggedIn(true);
			} else setCurrentUser(null);
		});
		return unsubscribe;
	}, []);

	/**
	 * Registers a new user with the provided registration data.
	 * Validates the data using Zod schema and attempts to register the user using Firebase.
	 *
	 * @param {RegisterSchemaType} data - The registration data.
	 * @returns {Promise<void>} A promise that resolves when registration is complete.
	 */
	const registerUser = async (data: RegisterSchemaType) => {
		setAuthLoading(true);
		const validated = registerSchema.safeParse(data);
		if (validated.error) {
			const messages = validated.error.errors.map((err) => err.message);
			setAuthError({ messages, name: "validation errors" });
			return;
		}
		try {
			await firebaseRegisterUser(data);
		} catch (error) {
			console.error(error);
			setAuthError(error as AuthError);
		} finally {
			setAuthLoading(false);
		}
	};

	/**
	 * Logs in a user with the provided login data.
	 * Validates the data using Zod schema and attempts to log in the user using Firebase.
	 *
	 * @param {LoginSchemaType} data - The login data.
	 * @returns {Promise<void>} A promise that resolves when login is complete.
	 */
	const loginUser = async (data: LoginSchemaType) => {
		setAuthLoading(true);
		const validated = loginSchema.safeParse(data);
		if (validated.error) {
			const messages = validated.error.errors.map((err) => err.message);
			setAuthError({ messages, name: "validation errors" });
			return;
		}
		try {
			await firebaseLogin(data);
		} catch (error) {
			console.error(error);
			setAuthError(error as AuthError);
		} finally {
			setAuthLoading(false);
		}
	};

	/**
	 * Logs out the current user.
	 * Signs the user out using Firebase authentication.
	 *
	 * @returns {Promise<void>} A promise that resolves when logout is complete.
	 */
	const logout = async () => {
		setAuthLoading(true);
		try {
			await signOut(auth);
		} catch (error) {
			console.error("Error logging out", error);
			setAuthError(error as AuthError);
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
