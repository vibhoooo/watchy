import {createSlice} from "@reduxjs/toolkit";

const clickSlice = createSlice(
	{
		name: "click",
		initialState: false,
		reducers: {
			clicked: (state, action) => {
				state = !state
			}
		}
	}
);

export const {clicked} = clickSlice.actions;

export default clickSlice.reducer;