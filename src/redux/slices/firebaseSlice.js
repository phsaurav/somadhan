import { createSlice } from "@reduxjs/toolkit";

// export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
// 	const response = await fetch("./books.json").then((res) => res.json());
// 	return response.data;
// });

const initialState = {
	user: {},
	name: "",
	error: "",
	isLoading: false,
	admin: "",
	token: "",
};

export const firebaseSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setUser: (state, { payload }) => {
			state.user = payload;
		},
		setName: (state, { payload }) => {
			state.name = payload;
		},
		setError: (state, { payload }) => {
			state.error = payload;
		},
		setIsLoading: (state, { payload }) => {
			state.isLoading = payload;
		},
		setAdmin: (state, { payload }) => {
			state.admin = payload;
		},
		setToken: (state, { payload }) => {
			state.token = payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchBooks.fulfilled, (state, action) => {
	// 		state.discover = action.payload;
	// 	});
	// },
});

export const { setUser, setName, setError, setIsLoading, setAdmin, setToken } =
	firebaseSlice.actions;

export default firebaseSlice.reducer;
