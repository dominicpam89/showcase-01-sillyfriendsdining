import { useState } from "react";

export const useDialog = () => {
	const [open, setOpen] = useState(false);
	const onOpenChange = (o: boolean) => setOpen(o);
	return { open, onOpenChange };
};
