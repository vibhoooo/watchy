import Header from "./Header";
import MainContainer from "./MainContainer";
import useBrowse from "../hooks/useBrowse";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
	useBrowse();

	return (
		<div>
			<Header />
			<MainContainer />
			<SecondaryContainer />
		</div>
	);
}

export default Browse;

