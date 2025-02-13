import {useSelector} from "react-redux";
import MovieList from "./MovieList";

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

	if((movies ===  null) || (popularMovies === null) || (topMovies === null) || (upcomingMovies === null)) {
		return;
	}

	if((movies.length === 0) || (popularMovies.length === 0) || (topMovies.length === 0) || (upcomingMovies.length === 0)) {
		return;
	}

	return (
		<div>
			<div className="absolute w-full mt-[800px] z-[51] bg-black">
				<div className="-mt-30">
					<MovieList title={"NOW PLAYING"} list={movies} />
					<MovieList title={"POPULAR"} list={popularMovies} /> 
					<MovieList title={"TOP RATED"} list={topMovies} />
					<MovieList title={"UPCOMING"} list={upcomingMovies} />
				</div>
			</div>
		</div> 
	);
}

export default SecondaryContainer;