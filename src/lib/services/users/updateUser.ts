import { auth, storage } from "@/lib/firebase.config";
import {
	updateProfile,
	updateEmail,
	sendPasswordResetEmail,
} from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

export async function updateCurrentUser({
	displayName,
	image,
	email,
}: {
	displayName: string;
	email: string;
	image: File | undefined;
}) {
	const user = auth.currentUser;
	if (!user) throw new Error("No user is currently active");
	try {
		if (displayName) {
			await updateProfile(user, { displayName });
		}
		if (email) {
			await updateEmail(user, email);
		}
		if (image) {
			const imageRef = ref(storage, `/showcase-1/users/${image.name}`);
			await uploadBytes(imageRef, image);
			const imageURL = await getDownloadURL(imageRef);
			await updateProfile(user, { photoURL: imageURL });
		}
	} catch (error) {
		console.error(error);
		throw error as Error;
	}
}

export async function resetPassword({ email }: { email: string }) {
	try {
		await sendPasswordResetEmail(auth, email);
	} catch (error) {
		console.error(error);
		throw error as Error;
	}
}
