import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../store/userSlice";
import { useNavigate } from "react-router";

const useHeader = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	
	useEffect(() => {
		const f = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { displayName, email, uid, accessToken } = user;
				dispatch(
				addUser({
					displayName,
					userEmail: email,
					userUid: uid,
					userToken: accessToken,
				})
				);
				navigate("/browse");
			} 
			else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		return () => {
			f();
		};
	}, []);
};

export default useHeader;
