import {createSlice} from "@reduxjs/toolkit";

const popularSlice = createSlice(
	{
		name: "popular",
		initialState: {
			popular: null
		},
		reducers: {
			addPopular: (state, action) => {
				state.popular = action.payload;
			},
			removePopular: (state, action) => {
				state.popular = null;
			}
		}
	}
);

export const {addPopular, removePopular} = popularSlice.actions;

export default popularSlice.reducer;
