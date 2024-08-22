import { useMutation } from "@tanstack/react-query";
import { deleteFriend } from "@/lib/services/firebase-firestore/friends-list";
import { useToast } from "@/components/ui/use-toast";
import { queryClient } from "@/lib/utils";

export const useRemoveFriend = (onOpenChange: (o: boolean) => void) => {
	const { toast } = useToast();
	const { mutate, isPending } = useMutation({
		mutationFn: deleteFriend,
		onError(error) {
			toast({
				title: "Failed to delete",
				description: `Error: ${error.message}`,
				variant: "destructive",
			});
		},
		onSuccess() {
			toast({
				title: "Goodbye!",
				description: `Successfully remove your friend from your life!`,
			});
			queryClient.invalidateQueries({ queryKey: ["friendsList"] });
		},
		onSettled() {
			onOpenChange(false);
		},
	});

	const onDeleteFriend = (id: string, imageUrl: string) => {
		toast({
			description: "Your delete request is processed",
		});
		mutate({ friendId: id, imageUrl });
	};

	return {
		onDeleteFriend,
		isPending,
	};
};
