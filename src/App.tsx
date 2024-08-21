import AppContainer from "@/components/AppContainer";
import AuthSelect from "./components/AuthSelect";
import AppContent from "./components/AppContent";
import { useContext } from "react";
import { ContextGlobal } from "./lib/context/global.context";

const App = () => {
	const { currentUser } = useContext(ContextGlobal);
	return (
		<AppContainer>
			{!currentUser && <AuthSelect />}
			{currentUser && <AppContent />}
		</AppContainer>
	);
};

export default App;
