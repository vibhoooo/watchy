import Header from "./Header";
import {useState, useRef} from "react";
import {validate} from "../utils/validate";
import {auth} from "../utils/firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {BG_IMG} from "../utils/constants";

const Login = () => {
	const [islogin, isLogin] = useState(true);
	
	const email = useRef(null);
	const password =  useRef(null);
	const username = useRef(null);

	const [error, setError] = useState(false);

	const handleClick = () => {
		setError(false);
		isLogin(!islogin);
	}
	
	const handleSubmit = () => {
		if(!validate(email.current.value, password.current.value)) {
			setError(true);
		}
		else {
			if(islogin === false) {
				createUserWithEmailAndPassword(
					auth,
					email.current.value,
					password.current.value
				)
				.then((userCredential) => {
					const user = userCredential.user;
					updateProfile(
						user,
						{
							displayName: username.current.value
						}
					)
					.then(() => {
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
						setError(errorCode + " - " +  errorMessage);
					});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorCode + " - " + errorMessage);
				});
			}
			else {
				signInWithEmailAndPassword(
					auth, 
					email.current.value, 
					password.current.value
				)
				.then(() => {
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setError(errorCode + " - " +  errorMessage); 
				});
			}
		}
	}
	return (
		<div>
			<Header />
			<img
				className="absolute w-screen h-screen object-cover"
				src={BG_IMG}
				alt="bg-img"
			/>
			<form onSubmit={(e) => {e.preventDefault()}} className="sm:w-1/2 absolute p-12 bg-black mt-30 mx-auto left-0 right-0 rounded-lg opacity-80">
				<h1 className="font-bold text-white sm:text-3xl text-xl my-6 mx-1">{islogin ? "Log In" : "Sign Up"}</h1>
				{(!islogin) && <input className="text-white bg-gray-500 rounded-lg p-4 my-6 mx-1 w-full border border-black" type="text" placeholder="Username" ref={username} />}
				<input className="text-white bg-gray-500 rounded-lg p-4 my-6 mx-1 w-full border border-black" type="text" placeholder="Email id" ref={email} />
				<input className="text-white bg-gray-500 rounded-lg p-4 my-6 mx-1 w-full border border-black" type="password" placeholder="Password" ref={password} />
				{error && <p className="text-red-500 text-lg my-3 mx-1 w-full ">Incorrect Email id or Password</p>}
				<button className="text-white bg-red-500 rounded-lg p-4 my-6 mx-1 w-full border border-black cursor-pointer hover:bg-gray-300 hover:text-black" onClick={handleSubmit}>{islogin ? "Log In" : "Sign Up"}</button>
				{(islogin) && <button className="text-white text-sm my-6 mx-1 w-full cursor-pointer" onClick={handleClick}>New user? Sign Up</button>}
				{(!islogin) && <button className="text-white text-sm my-6 mx-1 w-full cursor-pointer" onClick={handleClick}>Already a user? Log In</button>}
			</form>
		</div>
	);
}

export default Login;