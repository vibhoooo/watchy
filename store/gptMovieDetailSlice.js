import {createSlice} from "@reduxjs/toolkit";

const gptMovieDetailSlice = createSlice(
	{
		name: "gptMovieDetail",
		initialState: {
			gptMovieDetail: null
		},
		reducers: {
			addGPTMovieDetail: (state, action) => {
				state.gptMovieDetail = action.payload;
			},
			removeGPTMovieDetail: (state, action) => {
				state.gptMovieDetail = null;
			}
		}
	}
);

export const {addGPTMovieDetail, removeGPTMovieDetail} = gptMovieDetailSlice.actions;

export default gptMovieDetailSlice.reducer;