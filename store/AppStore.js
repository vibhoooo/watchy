import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import trailerReducer from "./trailerSlice";
import upcomingReducer from "./upcomingSlice";
import topReducer from "./topSlice";
import popularReducer from "./popularSlice";
import gptReducer from "./gptSlice";
import langReducer from "./langSlice";
import gptMovieReducer from "./gptMovieSlice";
import gptMovieDetailReducer from "./gptMovieDetailSlice";
import clickReducer from "./clickSlice";
import prevGPTMovieReducer from "./prevGPTMovieSlice";

const AppStore = configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
		trailer: trailerReducer,
		popular: popularReducer,
		top: topReducer,
		upcoming: upcomingReducer,
		gpt: gptReducer,
		lang: langReducer,
		gptMovie: gptMovieReducer,
		gptMovieDetail: gptMovieDetailReducer,
		click: clickReducer,
		prevGPTMovie: prevGPTMovieReducer
	}
});

export default AppStore;