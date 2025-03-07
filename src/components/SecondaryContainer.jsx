import {useSelector} from "react-redux";
import MovieList from "./MovieList";
import {CONV} from "../utils/constants";

const SecondaryContainer = () => {
	const movies = useSelector((store) => {
		return store.movie.now;
	});

	const popularMovies = useSelector((store) => {
		return store.popular.popular;
	});

	const topMovies = useSelector((store) => {
		return store.top.top;
	});

	const upcomingMovies = useSelector((store) => {
		return store.upcoming.upcoming;
	});

	const lang = useSelector((store) => {
		return store.lang.lang;
	});

	if((movies ===  null) || (popularMovies === null) || (topMovies === null) || (upcomingMovies === null)) {
		return;
	}

	if((movies.length === 0) || (popularMovies.length === 0) || (topMovies.length === 0) || (upcomingMovies.length === 0)) {
		return;
	}

	return (
		<div>
			<div className="absolute w-full mt-[600px] sm:mt-[800px] z-[51] bg-black">
				<div className="sm:-mt-30">
					<MovieList title={CONV.nowPlaying[lang]} list={movies} />
					<MovieList title={CONV.popular[lang]} list={popularMovies} /> 
					<MovieList title={CONV.topRated[lang]} list={topMovies} />
					<MovieList title={CONV.upcoming[lang]} list={upcomingMovies} />
				</div>
			</div>
		</div> 
	);
}

export default SecondaryContainer;