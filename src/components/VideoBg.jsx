import {useSelector} from "react-redux";
import useVideoBg from "../hooks/useVideoBg";
import {BG_VID} from "../utils/constants";

const VideoBg = ({id}) => {
	useVideoBg(id);

	const trailer = useSelector((store) => {
		return store.trailer.now;
	});

	if(trailer === null) {
		return;
	}

	const {key} = trailer;

	return (
		<div className="absolute w-screen aspect-video z-50">
			<iframe
				className="w-screen aspect-video z-50 h-150 sm:h-200"
				src={BG_VID}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default VideoBg;