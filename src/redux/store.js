import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counter/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
