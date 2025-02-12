import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
import {useSelector} from "react-redux";

const MainContainer = () => {
	const movies = useSelector((store) => {
		return store.movie.now;
	})

	if(movies === null) {
		return;
	}

	if(movies.length === 0) {
		return;
	}

	const title = movies[0]?.original_title;
	const overview = movies[0]?.overview;
	const id = movies[0]?.id;

	return (
		<div>
			<VideoTitle title={title} overview={overview} />
			<VideoBg id={id} />
		</div>
	);
}

export default MainContainer;