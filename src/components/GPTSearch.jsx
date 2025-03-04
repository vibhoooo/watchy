import GPTSearchBar from "./GPTSearchBar";
import GPTSearchPage from "./GPTSearchPage";
import {useSelector} from "react-redux";
import GPTSearchUI from "./GPTSearchUI";

const GPTSearch = () => {
	const gptMovie = useSelector((store) => {
		return store.gptMovie.gptMovie;
	});

	return (
		<div className="relative">
			<GPTSearchPage />
			<GPTSearchBar />
			{gptMovie && <GPTSearchUI />}
		</div>
	);
}

export default GPTSearch;