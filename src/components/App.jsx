import Body from "./Body";
import {Provider} from "react-redux";
import AppStore from "../../store/AppStore";

const App = () => {
	return (
		<Provider store={AppStore}>
			<Body />
		</Provider>
	);
}

export default App;