import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import ContextGlobalProvider from "./lib/context/global.context.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ContextGlobalProvider>
			<App />
		</ContextGlobalProvider>
		<Toaster />
	</StrictMode>
);
