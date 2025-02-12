import {useEffect} from "react";
import {options} from "../utils/constants";
import {API_URL_BG} from "../utils/constants";
import {BG_VID} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addTrailer} from "../../store/trailerSlice"

const VideoBg = ({id}) => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API_URL_BG + id + "/videos?language=en-US", options);
			const data = await res?.json();

			const {results} = data;

			const filtered = results.filter((obj) => {
				return obj.type === "Trailer";
			});

			const [first] = filtered;

			dispatch(addTrailer(first));
		}

		fetchData();

		return (
			() => {

			}
		);
	}, []);

	return (
    <div className="absolute w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={BG_VID}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBg;