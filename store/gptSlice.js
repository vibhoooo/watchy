import {createSlice} from "@reduxjs/toolkit";

const gptSlice = createSlice(
	{
		name: "gpt",
		initialState: {
			gpt: false
		},
		reducers: {
			toggleGPT: (state, action) => {
				state.gpt = !state.gpt;
			}
		}
	}
);

export const {toggleGPT} = gptSlice.actions;

export default gptSlice.reducer;