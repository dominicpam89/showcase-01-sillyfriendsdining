import { ContextGlobal } from "@/lib/context/global.context";
import { useContext, useEffect, useState } from "react";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card-error";
import { Button } from "@/components/ui/button";
import { ShieldCloseIcon } from "lucide-react";

export default function FormErrorsDialog() {
	const { authError, isError } = useContext(ContextGlobal);
	const [visible, setVisible] = useState(true);
	useEffect(() => {
		if (isError) setVisible(true);
		else setVisible(false);
	}, [isError]);
	if (visible)
		return (
			<Card className="border-destructive">
				<CardHeader>
					<CardTitle>{authError.name}!</CardTitle>
					<CardDescription>
						There has been some errors! <br />
						{authError.message}
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
	else return null;
}
