import {createSlice} from "@reduxjs/toolkit";

const prevGPTMovieSlice = createSlice(
	{
		name: "prevGPTMovie",
		initialState: {
			prevGPTMovie: null
		},
		reducers: {
			addPrevGPTMovie: (state, action) => {
				state.prevGPTMovie = action.payload;
			},
			removePrevGPTMovie: (state, action) => {
				state.prevGPTMovie = null;
			}
		}
	}
);

export const {addPrevGPTMovie, removePrevGPTMovie} = prevGPTMovieSlice.actions;

export default prevGPTMovieSlice.reducer;