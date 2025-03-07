import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import useHeader from "../hooks/useHeader";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {toggleGPT} from "../../store/gptSlice";
import {LANG} from "../utils/constants";
import {changeLang} from "../../store/langSlice";
import {CONV} from "../utils/constants";

const Header = () => {
	const user = useSelector((store) => {
		return store.user;
	});

	const dispatch = useDispatch();

	useHeader();

	const handleClick = () => {
		signOut(auth)
		.then(() => {
		})
		.catch(() => {
		});
	}

	const handleGPTSearch = () => {
		dispatch(toggleGPT());
	}

	const handleSelect = (e) => {
		dispatch(changeLang(e.target.value));
	}

	const gpt = useSelector((store) => {
		return store.gpt.gpt;
	});

	const lang = useSelector((store) => { 
		return store.lang.lang;
	});

	return (
		<div className="fixed sm:flex sm:flex-row flex flex-col sm:justify-between px-8 py-2 bg-gradient-to-b from-black z-100 w-screen">
			<h1 className="mx-auto sm:mx-0 font-bold text-red-600 mt-4 text-5xl subpixel-antialiased font-serif hover:scale-120 hover:shadow-xl hover:brightness-110 cursor-pointer transition-transform duration-300 ease-in-out">
				WatchY
			</h1>
			{user && (
				<div className="flex justify-between">
					<button
						className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white hover:scale-120 hover:shadow-xl hover:brightness-110 transition-transform duartion-300 ease-in-out border border-black"
						onClick={handleGPTSearch}
					>
						{gpt ? CONV.home[lang] : CONV.gptSearch[lang]}
					</button>
					<div className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white hover:scale-120 hover:shadow-xl hover:brightness-110 transition-transform duration-300 ease-in-out border border-black">
						{user.displayName}
					</div>
					<button
						className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white hover:scale-120 hover:shadow-xl hover:brightness-110 transition-transform duration-300 ease-in-out border border-black"
						onClick={handleClick}
					>
						{CONV.signOut[lang]}
					</button>
					<select className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white hover:scale-120 hover:shadow-xl hover:brightness-110 transition-transform duartion-300 ease-in-out border border-black" onChange={(e) => {handleSelect(e)}}>
						{
							LANG.map((obj) => {
								return (
									<option key={obj.identifier} value={obj.identifier}>{obj.value}</option>	
								);
							})
						}
					</select>
				</div>
			)}
		</div>
	);
}

export default Header;