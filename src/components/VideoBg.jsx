import useVideoBg from "../hooks/useVideoBg";
import {BG_VID} from "../utils/constants";

const VideoBg = ({id}) => {
	useVideoBg(id);

	return (
		<div className="absolute w-screen aspect-video z-60">
			<iframe
				className="w-screen aspect-video z-60"
				src={BG_VID}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerPolicy="strict-origin-when-cross-origin"
				allowFullScreen
			></iframe>
		</div>
	);
}

export default VideoBg;