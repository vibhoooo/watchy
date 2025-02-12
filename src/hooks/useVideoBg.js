import { useEffect } from "react";
import { options } from "../utils/constants";
import { API_URL_BG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailer } from "../../store/trailerSlice";

const useVideoBg = (id) => {
	const dispatch = useDispatch();
	
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

		fetchData();

		return () => {};
	}, []);
};

export default useVideoBg;
