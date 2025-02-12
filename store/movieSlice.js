import {createSlice} from "@reduxjs/toolkit";

const movieSlice = createSlice(
	{
		name: "movie",
		initialState: {
			now: null
		},
		reducers: {
			addMovie: (state, action) => {
				state.now = action.payload;
			},
			removeMovie: (state)  => {
				state.now = null;
			}
		}
	}
);

export const {addMovie, removeMovie} = movieSlice.actions;

export default movieSlice.reducer;