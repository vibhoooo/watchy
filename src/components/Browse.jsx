import Header from "./Header";
import MainContainer from "./MainContainer";
import useBrowse from "../hooks/useBrowse";

const Browse = () => {
	useBrowse();

	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	);
}

export default Browse;

