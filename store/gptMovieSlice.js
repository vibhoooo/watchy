import {createSlice} from "@reduxjs/toolkit";

const gptMovieSlice = createSlice(
	{
		name: "gptMovie",
		initialState: {
			gptMovie: null
		},
		reducers: {
			addGPTMovie: (state, action) => { 
				state.gptMovie = action.payload;	
			},
			removeGPTMovie: (state, action) => {
				state.gptMovie = null
			}
		}
	}
);

export const {addGPTMovie, removeGPTMovie} = gptMovieSlice.actions;

export default gptMovieSlice.reducer;