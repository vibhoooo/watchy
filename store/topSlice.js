import {createSlice} from "@reduxjs/toolkit";

const topSlice = createSlice(
	{
		name: "top",
		initialState: {
			top: null
		},
		reducers: {
			addTop: (state, action) => {
				state.top = action.payload;
			},
			removeTop: (state, action) => {
				state.top = null;
			}
		}
	}
);

export const {addTop, removeTop} = topSlice.actions;

export default topSlice.reducer;
