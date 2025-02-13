import {options} from "../utils/constants";
import {API_URL} from "../utils/constants";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {addMovie} from "../../store/movieSlice";
import {addPopular} from "../../store/popularSlice";
import {addTop} from "../../store/topSlice";
import {addUpcoming} from "../../store/upcomingSlice";
import {API_URL_POPULAR, API_URL_TOP, API_URL_UPCOMING} from "../utils/constants";

const useBrowse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(API_URL, options);
      const data = await res?.json();

      const {results} = data;

      dispatch(addMovie(results));
    }

	const fetchData2 = async () => {
		const res = await fetch(API_URL_POPULAR, options);
		const data = await res?.json();

		const {results} = data;

		dispatch(addPopular(results));
	}

	const fetchData3 = async () => {
		const res = await fetch(API_URL_TOP, options);
		const data = await res?.json();

		const {results} = data;

		dispatch(addTop(results));
	}

	const fetchData4 = async () => {
		const res = await fetch(API_URL_UPCOMING, options);
		const data = await res?.json();

		const {results} = data;

		dispatch(addUpcoming(results));
	}

    fetchData();

	fetchData2();

	fetchData3();

	fetchData4();

    return () => {};
  }, []);
};

export default useBrowse;
