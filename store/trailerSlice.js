import {createSlice} from "@reduxjs/toolkit";

const trailerSlice = createSlice(
	{
		name: "trailer",
		initialState: {
			now: null
		},
		reducers: {
			addTrailer: (state, action) => {
				state.now = action.payload;
			},
			removeTrailer: (state, action) => {
				state.now = null;
			}
		}
	}
)

export const {addTrailer, removeTrailer} = trailerSlice.actions;

export default trailerSlice.reducer;