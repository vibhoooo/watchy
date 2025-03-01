const MovieCard = ({obj}) => {
	return (
		<div className="p-1 m-1 w-60">
		<img
			className="rounded-xl border border-black hover:scale-120 hover:shadow-xl hover:brightness-110 cursor-pointer transition-transform duration-300 ease-in-out"
			src={"https://image.tmdb.org/t/p/w780" + obj.poster_path}
			alt="poster-img"
		/>
		</div>
	);
}

export default MovieCard;