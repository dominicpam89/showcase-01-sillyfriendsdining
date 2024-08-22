import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// tanstack query
import { QueryClient } from "@tanstack/react-query";
export const queryClient = new QueryClient();
