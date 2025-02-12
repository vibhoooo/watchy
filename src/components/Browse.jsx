import Header from "./Header";
import {options} from "../utils/constants";
import {API_URL} from "../utils/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addMovie} from "../../store/movieSlice";
import MainContainer from "./MainContainer";

const Browse = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(API_URL, options);
			const data = await res?.json();

			const {results} = data;

			dispatch(addMovie(results));
		}

		fetchData();

		return (
			() => {

			}
		);
	}, []);
	
	return (
		<div>
			<Header />
			<MainContainer />
		</div>
	);
}

export default Browse;

