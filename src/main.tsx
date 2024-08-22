import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import ContextGlobalProvider from "./lib/context/global.context.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/utils.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ContextGlobalProvider>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</ContextGlobalProvider>
		<Toaster />
	</StrictMode>
);
