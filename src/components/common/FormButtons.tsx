import { Button } from "@/components/ui/button";

export default function FormButtons() {
	return (
		<div aria-label="form-buttons" className="flex gap-2 items-center w-full">
			<Button variant="outline" size="sm" type="button" className="w-full">
				Reset
			</Button>
			<Button type="submit" size="sm" className="w-full">
				Add
			</Button>
		</div>
	);
}
