import MovieCard from "./MovieCard";

const MovieList = ({title, list}) => {
	return (
		<div>
			<h1 className="text-white sm:text-xl text-sm p-1 m-2">{title}</h1>
				<div className="flex overflow-x-scroll">
					<div className="flex">
						{
							list.map((obj) => {
								return (
									<MovieCard key={obj.id} obj={obj} />
								);
							})
						}
					</div>
				</div>
		</div>
	);
}

export default MovieList;

