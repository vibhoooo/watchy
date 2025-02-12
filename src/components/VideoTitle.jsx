const VideoTitle = ({title, overview}) => {
	return (
		<div className="absolute pt-60 p-10 z-1 aspect-video bg-gradient-to-r from-black">
			<h3 className="text-white text-6xl p-1 m-2">{title}</h3>
			<p className="text-white text-sm p-2 m-2 w-1/4">{overview}</p>
			<button className="p-4 m-4 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white opacity-80">Play</button>
			<button className="p-4 m-4 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white opacity-80">More Info</button>
		</div>
	);
}

export default VideoTitle;
