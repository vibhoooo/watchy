import {createSlice} from "@reduxjs/toolkit";

const upcomingSlice = createSlice(
	{
		name: "upcoming",
		initialState: {
			upcoming: null
		},
		reducers: {
			addUpcoming: (state, action) => {
				state.upcoming = action.payload;
			},
			removeUpcoming: (state, action) => {
				state.upcoming = null;
			}
		}
	}
);

export const {addUpcoming, removeUpcoming} = upcomingSlice.actions;

export default upcomingSlice.reducer;

