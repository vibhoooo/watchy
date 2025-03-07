import {useState} from "react";
import {CONV, options} from "../utils/constants";
import {useSelector} from "react-redux";
import client from "../utils/openai";
import {CONTEXT} from "../utils/constants";
import {API_URL_SEARCH_PART_1, API_URL_SEARCH_PART_2} from "../utils/constants";
import {useDispatch} from "react-redux";
import {addGPTMovie} from "../../store/gptMovieSlice";
import {addGPTMovieDetail} from "../../store/gptMovieDetailSlice";

const GPTSearchBar = () => {
	const [prompt, setPrompt] = useState("");

	const dispatch = useDispatch();

	const handleChange = (e) => {
		setPrompt(e.target.value);
	}

	const lang = useSelector((store) => {
		return store.lang.lang;
	});

	const getDetail = async (movies) => {
		const fetchData = async (movie) => {
			const res = await fetch(API_URL_SEARCH_PART_1 + movie + API_URL_SEARCH_PART_2, options);
			const data = await res?.json();
			const fData = data?.results;
			return fData;
		}
		const arr = movies.map((movie) => {
			return fetchData(movie);
		})
		const data = await Promise.all(arr);
		dispatch(addGPTMovieDetail(data));
	}


	const handleClick = () => {
		async function main() {
			const response = await client.chat.completions.create({
				messages: [
					{ role: "system", content: "" },
					{ role: "user", content: CONTEXT + prompt },
				],
				model: "gpt-4o-mini",
				temperature: 1,
				max_tokens: 4096,
				top_p: 1
			});
			const movies = response.choices[0].message.content.split(",");
			dispatch(addGPTMovie(movies));
			getDetail(movies);
		}
		main().catch((err) => {
			console.error("The sample encountered an error:", err);
		});
	};

	return (
		<div className="absolute top-90 left-0 right-0 xl:top-80 xl:left-90 xl:w-[50%] grid xl:grid-cols-12 grid-cols-1 bg-black border border-black rounded-xl shadow-xl">
			<input
				className="text-white bg-gray-500 rounded-xl p-4 m-4 border border-black xl:col-span-10 shadow-xl"
				type="text"
				placeholder={CONV.placeholder[lang]}
				value={prompt}
				onChange={(e) => {
				handleChange(e);
				}}
			/>
			<button className="text-white bg-red-500 p-2 m-6 cursor-pointer rounded-xl hover:bg-gray-300 hover:text-black hover:shadow-xl hover:brightness-110 hover:scale-120 transition-transform duration-300 ease-in-out xl:col-span-2 h-10 border border-black" onClick={handleClick}>
				{CONV.search[lang]}
			</button>
		</div>
	);
}

export default GPTSearchBar;