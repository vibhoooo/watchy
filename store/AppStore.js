import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import trailerReducer from "./trailerSlice";

const AppStore = configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
		trailer: trailerReducer
	}
});

export default AppStore;