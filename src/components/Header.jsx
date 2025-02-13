import {signOut} from "firebase/auth";
import {auth} from "../utils/firebase";
import {LOGO_IMG} from "../utils/constants";
import useHeader from "../hooks/useHeader";
import {useSelector} from "react-redux";

const Header = () => {
	const user = useSelector((store) => {
		return store.user;
	});

	useHeader();

	const handleClick = () => {
		signOut(auth)
		.then(() => {
		})
		.catch(() => {
		});
	}

	return (
		<div className="fixed flex justify-between px-8 py-2 bg-gradient-to-b from-black z-100 w-screen">
			<img
				className="w-44"
				src={LOGO_IMG}
				alt="header-img"
			/>
			{user && (
				<div className="flex justify-between">
					<div className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white opacity-80">
						{user.displayName}
					</div>
					<button className="m-4 p-2 rounded-xl bg-red-500 hover:bg-gray-300 hover:text-black cursor-pointer text-white opacity-80" onClick={handleClick}>Sign Out</button>
				</div>
			)}
		</div>
	);
}

export default Header;