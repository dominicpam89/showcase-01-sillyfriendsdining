import { Button } from "@/components/ui/button";
import { FieldValues, useFormContext } from "react-hook-form";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import FormResetDialog from "./FormResetDialog";
import { useState } from "react";

interface Props {
	submitText: string;
	withReset?: boolean;
	disabled?: boolean;
}
export default function FormButtons<T extends FieldValues>({
	submitText,
	withReset = true,
	disabled = false,
}: Props) {
	const { reset } = useFormContext<T>();
	const [confirm, setConfirm] = useState(false);
	return (
		<div aria-label="form-buttons" className="flex gap-2 items-center w-full">
			<Dialog open={confirm} onOpenChange={(o) => setConfirm(o)}>
				{withReset && (
					<Button
						variant="outline"
						size="sm"
						type="button"
						className="w-full"
						asChild
						disabled={disabled}
					>
						<DialogTrigger>Reset</DialogTrigger>
					</Button>
				)}
				<FormResetDialog
					confirmBtn={
						<Button
							variant="destructive"
							onClick={() => {
								setConfirm(false);
								reset();
							}}
						>
							I don't care about your warning, go for it!
						</Button>
					}
				/>
			</Dialog>
			<Button type="submit" size="sm" className="w-full" disabled={disabled}>
				{submitText}
			</Button>
		</div>
	);
}
