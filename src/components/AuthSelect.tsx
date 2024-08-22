import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FormRegister from "./forms/FormRegister";
import FormLogin from "./forms/FormLogin";
import { useState } from "react";

export default function AuthSelect() {
	const [tab, setTab] = useState("login");
	const onTabChange = (val: string) => setTab(val);
	return (
		<Tabs
			className="w-full max-w-lg mt-12 md:mt-24"
			value={tab}
			onValueChange={onTabChange}
		>
			<TabsList className="w-full bg-info/80 text-info-foreground">
				<TabsTrigger value="register" className="w-full">
					Register
				</TabsTrigger>
				<TabsTrigger value="login" className="w-full">
					Login
				</TabsTrigger>
			</TabsList>
			<TabsContent value="register">
				<FormRegister switchTab={onTabChange} />
			</TabsContent>
			<TabsContent value="login">
				<FormLogin switchTab={onTabChange} />
			</TabsContent>
		</Tabs>
	);
}
