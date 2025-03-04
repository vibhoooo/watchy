import {useEffect} from "react";
import {options} from "../utils/constants";
import {API_URL_BG} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addTrailer} from "../../store/trailerSlice";
import {useSelector} from "react-redux";

const useVideoBg = (id) => {
	const dispatch = useDispatch();

	const trailer = useSelector((store) => {
		return store.trailer.now;
	});
	
	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				API_URL_BG + id + "/videos?language=en-US",
				options
			);
			const data = await res?.json();

			const { results } = data;

			const filtered = results.filter((obj) => {
				return obj.type === "Trailer";
			});

			const [first] = filtered;

			dispatch(addTrailer(first));
		};

		if(trailer === null) {
			fetchData();
		}

		return () => {};
	}, []);
};

export default useVideoBg;
