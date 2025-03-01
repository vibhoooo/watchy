import Header from "./Header";
import MainContainer from "./MainContainer";
import useBrowse from "../hooks/useBrowse";
import SecondaryContainer from "./SecondaryContainer";
import {useSelector} from "react-redux";
import GPTSearch from "./GPTSearch";

const Browse = () => {
	useBrowse();

	const gpt = useSelector((store) => {
		return store.gpt.gpt;
	});

	return (
		<div>
			<Header />
			{
				gpt 
				? 
				<GPTSearch />
				:
				(
					<>
						<MainContainer />
						<SecondaryContainer />
					</>
				)
			}
		</div>
	);
}

export default Browse;

