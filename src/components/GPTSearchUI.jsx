import {useSelector} from "react-redux";
import MovieList from "./MovieList";
import ShimmerUI from "./ShimmerUI";

const GPTSearchUI = () => {
	const gptMovie = useSelector((store) => {
		return store.gptMovie.gptMovie;
	});

	const gptMovieDetail = useSelector((store) => {
		return store.gptMovieDetail.gptMovieDetail;
	});

	if(gptMovieDetail === null) {
		return (
			<ShimmerUI />
		);
	}

	return (
		<div className="absolute bg-black top-150 border-black border rounded-xl left-10 right-10 opacity-95">
			{
				gptMovieDetail.map((arr, index) => {
					return (
						<MovieList key={gptMovie[index]} title={gptMovie[index]} list={arr} />
					);
				})
			}
		</div>
	);
};

export default GPTSearchUI;