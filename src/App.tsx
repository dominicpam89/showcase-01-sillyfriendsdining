import AppContainer from "@/components/AppContainer";
import AuthSelect from "./components/AuthSelect";
import MainApp from "./components/MainApp";
import { useContext } from "react";
import { ContextGlobal } from "./lib/context/global.context";

const App = () => {
	const { currentUser } = useContext(ContextGlobal);
	return (
		<AppContainer>
			{!currentUser && <AuthSelect />}
			{currentUser && <MainApp />}
		</AppContainer>
	);
};

export default App;
