import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counter/counterSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
	},
});
