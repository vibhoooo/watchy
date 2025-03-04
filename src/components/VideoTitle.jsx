import {CONV} from "../utils/constants";
import {useSelector} from "react-redux";

const VideoTitle = ({title, overview}) => {
	const lang = useSelector((store) => {
		return store.lang.lang;
	});

	return (
		<div className="absolute pt-60 p-10 z-70 aspect-video bg-gradient-to-r from-black">
			<h3 className="text-white text-6xl p-1 m-2">{title}</h3>
			<p className="text-white text-sm p-2 m-2 w-1/4">{overview}</p>
			<button className="p-4 m-4 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white opacity-80 hover:scale-120 hover:shadow-xl hover:brightness-110 transition-transform duration-300 ease-in-out">
				{CONV.play[lang]}
			</button>
			<button className="p-4 m-4 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black text-white opacity-80 hover:scale-120 hover:shadow-xl hover:brightness-110 cursor-pointer transition-transform duration-300 ease-in-out">
				{CONV.moreInfo[lang]}
			</button>
		</div>
	);
}

export default VideoTitle;
