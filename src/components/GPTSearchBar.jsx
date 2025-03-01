import {useState} from "react";
import {CONV} from "../utils/constants";
import {useSelector} from "react-redux";
import client from "../utils/openai";
import {CONTEXT} from "../utils/constants";

const GPTSearchBar = () => {
	const [prompt, setPrompt] = useState("");

	const handleChange = (e) => {
		setPrompt(e.target.value);
	}

	const lang = useSelector((store) => {
		return store.lang.lang;
	});

	const handleClick = () => {
		async function main() {
			const chatCompletion = await client.chat.completions.create({
				messages: [{ role: 'user', content: CONTEXT + prompt }],
				model: 'gpt-3.5-turbo',
			});
			console.log(chatCompletion.choices);
		}
		main();
	};

	return (
		<div className="absolute top-[40%] left-[25%] w-[50%] grid xl:grid-cols-12 grid-cols-1">
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