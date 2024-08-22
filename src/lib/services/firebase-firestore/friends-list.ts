import { FriendType } from "@/lib/definition/friends-list.type";
import { db, storage } from "@/lib/firebase.config";
import {
	collection,
	query,
	where,
	getDocs,
	FirestoreError,
	addDoc,
	doc,
	updateDoc,
	deleteDoc,
	getDoc,
} from "firebase/firestore";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";

const COLLECTION_NAME = "friendsList";
const cols = collection(db, COLLECTION_NAME);

export type QueryResponseType<T> = {
	error: boolean;
	name: string;
	message: string;
	data: T | null;
};

// READ
export async function getFriends(uid: string) {
	try {
		const q = query(cols, where("uid", "==", uid));
		const snapshot = await getDocs(q);
		const friends: FriendType[] = snapshot.docs.map(
			(doc) => doc.data() as FriendType
		);
		return {
			error: false,
			name: "query success",
			message: "successfully fetch friends list",
			data: friends,
		} satisfies QueryResponseType<FriendType[]>;
	} catch (error) {
		console.error(error);
		return {
			error: true,
			name: "Query Get Error",
			message: "Couldn't get data from friendsList collection",
			data: error as FirestoreError,
		} satisfies QueryResponseType<FirestoreError>;
	}
}

// READ ONE BY ID
export async function getFriend(friendId: string) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const friendDoc = await getDoc(friendDocRef);

		if (friendDoc.exists()) {
			const friendData = friendDoc.data() as FriendType;
			return friendData;
		} else {
			throw new Error("Friend not found");
		}
	} catch (error) {
		const err = new Error("Error fetching single document with given id");
		console.error("Error fetching document: ", error);
		return {
			error: true,
			name: "get one friend by id",
			message: "failed to get one friend by id",
			data: err,
		} satisfies QueryResponseType<Error>;
	}
}

// CREATE
export async function createFriend(name: string, image: File, uid: string) {
	try {
		const imageRef = ref(storage, `/showcase-1/friends-list/${image.name}`);
		await uploadBytes(imageRef, image);
		const imageURL = await getDownloadURL(imageRef);

		const friendData: Omit<FriendType, "id"> = {
			name,
			image: imageURL,
			balance: 0,
			uid,
		};

		const docRef = await addDoc(cols, friendData);
		return {
			error: false,
			name: "create friend",
			message: "successfully created friend data",
			data: { ...friendData, id: docRef.id.toString() },
		} satisfies QueryResponseType<FriendType>;
	} catch (error) {}
}

// UPDATE
export async function updateFriend(
	friendId: string,
	name: string,
	imageFile?: File
) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const updatedData: Partial<FriendType> = { name };

		if (imageFile) {
			const imageRef = ref(
				storage,
				`/showcase-1/friends-list/${imageFile.name}`
			);
			await uploadBytes(imageRef, imageFile);
			const imageUrl = await getDownloadURL(imageRef);
			updatedData.image = imageUrl;
		}

		await updateDoc(friendDocRef, updatedData);
		return {
			error: false,
			name: "update friend",
			message: "successfully updated friend data",
			data: null,
		} satisfies QueryResponseType<null>;
	} catch (error) {
		console.error("Error updating document: ", error);
		return {
			error: true,
			name: "error on update friend",
			message: "failed to update friend data",
			data: error as FirestoreError,
		} satisfies QueryResponseType<FirestoreError>;
	}
}

// DELETE
export async function deleteFriend(friendId: string, imageUrl: string) {
	try {
		const friendDocRef = doc(db, COLLECTION_NAME, friendId);
		const imageRef = ref(storage, imageUrl);

		await deleteDoc(friendDocRef);
		await deleteObject(imageRef);
		return {
			error: false,
			name: "delete friend",
			message: "successfully deleted friend data",
			data: null,
		} satisfies QueryResponseType<null>;
	} catch (error) {
		console.error("Error deleting document: ", error);
		return {
			error: true,
			name: "error on delete friend",
			message: "failed to delete friend data",
			data: error as FirestoreError,
		} satisfies QueryResponseType<FirestoreError>;
	}
}
