import { useMutation } from "@tanstack/react-query";
import { createFriend } from "@/lib/services/firebase-firestore/friends-list";
import { FormAddFriendType } from "../definition/form-add-friend.definition";
import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";
import { useToast } from "@/components/ui/use-toast";
import { ContextFormAddFriendDialog } from "../context/form-add-friend-dialog";
import { queryClient } from "@/lib/utils";

export const useAddFriend = () => {
	const { currentUser } = useContext(ContextGlobal);
	const { onOpenChange } = useContext(ContextFormAddFriendDialog);
	const { toast } = useToast();
	const { mutate, isPending } = useMutation({
		mutationFn: createFriend,
		onError(error) {
			toast({
				variant: "destructive",
				title: "Failed to add new friend",
				description: `Error details: ${error.message}`,
			});
		},
		onSuccess(data) {
			toast({
				title: "Successfully add new friend!",
				description: `${data?.data.name} has been successfully added`,
			});
			queryClient.invalidateQueries({ queryKey: ["friendsList"] });
		},
		onSettled() {
			onOpenChange(false);
		},
	});
	const onAddFriend = ({ name, image }: FormAddFriendType) => {
		toast({
			description: "Your request is processed",
		});
		mutate({ uid: currentUser!.uid, name, image });
	};
	return { isPending, onAddFriend };
};
