import { useMutation } from "@tanstack/react-query";
import { updateCurrentUser } from "@/lib/services/users/updateUser";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { ContextGlobal } from "../context/global.context";

export const useUpdateProfile = () => {
	const { toast } = useToast();
	const { onTriggerState } = useContext(ContextGlobal);
	const { isPending, mutate } = useMutation({
		mutationFn: updateCurrentUser,
		onError(error) {
			toast({
				title: "Couldn't edit your profile",
				description: error.message,
				variant: "destructive",
			});
		},
		onSuccess() {
			toast({
				description: "Successfully update your profile",
			});
			onTriggerState();
		},
	});

	const onUpdateProfile = (
		displayName: string,
		email: string,
		image: File | undefined
	) => {
		toast({
			description: "Updating your profile is in progress...",
		});
		mutate({ displayName, email, image });
	};

	return { onUpdateProfile, isPending };
};
