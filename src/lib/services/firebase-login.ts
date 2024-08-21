import { AuthError, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase.config";
import { LoginSchemaType } from "../definition/auth.definition";

/**
 * Logs in a user using Firebase authentication with email and password.
 *
 * This function attempts to sign in the user using the provided email and password. If successful,
 * it returns the authenticated user object. If there is an error during the login process, the
 * function catches it, logs it to the console, and rethrows it as a Firebase AuthError.
 *
 * @param {LoginSchemaType} param0 - An object containing the user's email and password.
 * @param {string} param0.email - The user's email address.
 * @param {string} param0.password - The user's password.
 *
 * @returns {Promise<import("firebase/auth").User>} A promise that resolves to the authenticated user object.
 *
 * @throws {AuthError} If there is an error during the login process, an AuthError is thrown.
 */
export async function firebaseLogin({ email, password }: LoginSchemaType) {
	try {
		const userCred = await signInWithEmailAndPassword(auth, email, password);
		return userCred.user;
	} catch (error) {
		console.error(error);
		throw error as AuthError;
	}
}
