import { useMutation } from "@tanstack/react-query";
import { updateFriend } from "@/lib/services/firebase-firestore/friends-list";
import { useToast } from "@/components/ui/use-toast";
import { queryClient } from "@/lib/utils";
import { useContext } from "react";
import { ContextDialog } from "../context/dialog.context";

export const useManageBill = (personId: string) => {
	const { toast } = useToast();
	const { onOpenChange } = useContext(ContextDialog);

	const { mutate, isPending } = useMutation({
		mutationFn: updateFriend,
		onError(error) {
			toast({
				variant: "destructive",
				title: "Update failed",
				description: `Error details: ${error.message}`,
			});
		},
		onSuccess(data) {
			toast({
				title: "Successfully update balance!",
				description: data.message,
			});
			queryClient.invalidateQueries({ queryKey: ["friendsList"] });
		},
		onSettled() {
			onOpenChange(false);
		},
	});

	const onUpdateFriend = (balance: number, bill: number) => {
		toast({
			description: "your request is processed",
		});
		mutate({ friendId: personId, balance, bill });
	};

	return {
		isPending,
		onUpdateFriend,
	};
};
