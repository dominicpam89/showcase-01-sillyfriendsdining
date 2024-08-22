import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-error";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShieldCloseIcon } from "lucide-react";

interface Props {
	message: string;
	data: Error | null;
}
export default function ErrorUI({ data, message }: Props) {
	const [, setVisible] = useState(true);
	return (
		<Card className="border-destructive">
			<CardHeader>
				<CardTitle>{data?.name}!</CardTitle>
				<CardDescription>
					There has been some errors! <br />
					{message}
				</CardDescription>
			</CardHeader>
			<CardFooter>
				<Button
					type="button"
					size="sm"
					variant="ghost"
					className="text-destructive hover:font-semibold"
					onClick={() => setVisible(false)}
				>
					<ShieldCloseIcon /> Dismiss
				</Button>
			</CardFooter>
		</Card>
	);
}
