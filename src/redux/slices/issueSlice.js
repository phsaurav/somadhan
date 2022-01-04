import { createSlice } from "@reduxjs/toolkit";

// export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
// 	const response = await fetch("./books.json").then((res) => res.json());
// 	return response.data;
// });

const initialState = {
	openIssue: [],
	activeIssue: [],
	resolvedIssue: [],
};

export const issueSlice = createSlice({
	name: "issue",
	initialState,
	reducers: {
		addToOpenIssue: (state, { payload }) => {
			state.openIssue.push(payload);
		},
		addToActiveIssue: (state, { payload }) => {
			state.activeIssue.push(payload);
		},
		addToresolvedIssue: (state, { payload }) => {
			state.resolvedIssue.push(payload);
		},
		removeFromOpenIssue: (state, { payload }) => {
			state.openIssue = state.openIssue.filter((issue) => issue.id === payload);
		},
		removeFromActiveIssue: (state, { payload }) => {
			state.activeIssue = state.activeIssue.filter((issue) => issue.id === payload);
		},
		removeFromResolvedIssue: (state, { payload }) => {
			state.resolvedIssue = state.resolvedIssue.filter((issue) => issue.id === payload);
		},
	},
	// extraReducers: (builder) => {
	// 	builder.addCase(fetchBooks.fulfilled, (state, action) => {
	// 		state.discover = action.payload;
	// 	});
	// },
});

export const {
	addToOpenIssue,
	addToActiveIssue,
	addToresolvedIssue,
	removeFromOpenIssue,
	removeFromActiveIssue,
	removeFromResolvedIssue,
} = issueSlice.actions;

export default issueSlice.reducer;
