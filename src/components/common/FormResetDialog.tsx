import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

interface Props {
	confirmBtn: React.ReactNode;
}
export default function FormResetDialog({ confirmBtn }: Props) {
	return (
		<DialogContent className="p-16">
			<DialogHeader className="space-y-4">
				<DialogTitle className="text-xl">Seriously?</DialogTitle>
				<DialogDescription className="text-base">
					Sure you want to remove all your{" "}
					<span className="text-info font-medium">hard work</span> in
					filling this form?
				</DialogDescription>
			</DialogHeader>
			{confirmBtn}
		</DialogContent>
	);
}
