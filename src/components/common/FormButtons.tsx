import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export default function FormButtons() {
	const { reset } = useFormContext();
	return (
		<div aria-label="form-buttons" className="flex gap-2 items-center w-full">
			<Button
				variant="outline"
				size="sm"
				type="button"
				className="w-full"
				onClick={reset}
			>
				Reset
			</Button>
			<Button type="submit" size="sm" className="w-full">
				Add
			</Button>
		</div>
	);
}
