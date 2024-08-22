import { Button } from "@/components/ui/button";
import { useToast } from "../ui/use-toast";

export default function ToastTest() {
	const { toast, dismiss } = useToast();
	const toast1 = () => {
		toast({
			title: "Wow",
			description: "description of toast 1",
			variant: "success" as any,
			onEscapeKeyDown: () => dismiss(),
			duration: 2400,
		});
	};
	const toast2 = () => {
		toast({
			title: "test toast 2",
			description: "description of toast 2",
		});
	};
	const toast3 = () => {
		toast({
			title: "test toast 3",
			description: "description of toast 3",
		});
	};
	return (
		<div className="flex flex-col gap-2">
			<Button onClick={toast1}>Test toast 1</Button>
			<Button onClick={toast2}>Test toast 2</Button>
			<Button onClick={toast3}>Test toast 3</Button>
		</div>
	);
}
