import { Skeleton } from "@/components/ui/skeleton";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card-main";

const ItemComp = () => {
	return (
		<div className="w-full p-4 flex flex-col gap-2 md:flex-row md:gap-4 items-center">
			<Skeleton className="size-20 w-36 rounded-full" />
			<div className="w-full text-center md:text-left space-y-4">
				<Skeleton className="h-6 w-1/2" />
				<Skeleton className="h-6 w-full" />
			</div>
			<div className="w-4/12 flex gap-2 items-center">
				<Skeleton className="w-2/3 h-8" />
				<Skeleton className="size-5" />
			</div>
		</div>
	);
};

export default function FriendsListSkeleton() {
	return (
		<Card>
			<CardHeader>
				<Skeleton className="h-6 w-1/2" />
				<Skeleton className="h-6 w-full" />
			</CardHeader>
			<CardContent>
				<ItemComp />
				<ItemComp />
			</CardContent>
			<CardFooter className="w-full flex flex-row justify-center">
				<Skeleton className="w-1/2 h-8" />
			</CardFooter>
		</Card>
	);
}
