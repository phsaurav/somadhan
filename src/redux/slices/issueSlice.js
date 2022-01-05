import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const adminIssue = createAsyncThunk("issue/adminIssue", async (data) => {
	try {
		const res = await fetch("https://somadhanapp.herokuapp.com/admin/byemail", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ email: data.email, status: data.status }),
		});
		const response = await res.json();
		return { response, status: data.status };
	} catch (err) {}
});

export const userIssue = createAsyncThunk("issue/userIssue", async (data) => {
	try {
		const res = await fetch("https://somadhanapp.herokuapp.com/user/byemail", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({ email: data.email, status: data.status }),
		});
		const response = await res.json();
		return { response, status: data.status };
	} catch (err) {}
});
export const allIssues = createAsyncThunk("issue/allIssues", async () => {
	try {
		const res = await fetch(`https://somadhanapp.herokuapp.com/issues`);
		const response = await res.json();
		return response;
	} catch (err) {}
});

const initialState = {
	allIssue: [],
	openIssue: [],
	activeIssue: [],
	resolvedIssue: [],
};

export const issueSlice = createSlice({
	name: "issue",
	initialState,
	reducers: {
		addToAllIssues: (state, { payload }) => {
			state.allIssue.push(payload);
		},
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
	extraReducers: (builder) => {
		builder.addCase(adminIssue.fulfilled, (state, action) => {
			if (action.payload.status === "open") {
				state.openIssue = action.payload.response;
			} else if (action.payload.status === "active") {
				state.activeIssue = action.payload.response;
			} else {
				state.resolvedIssue = action.payload.response;
			}
		});
		builder.addCase(userIssue.fulfilled, (state, action) => {
			if (action.payload.status === "open") {
				state.openIssue = action.payload.response;
			} else if (action.payload.status === "active") {
				state.activeIssue = action.payload.response;
			} else {
				state.resolvedIssue = action.payload.response;
			}
		});
		builder.addCase(allIssues.fulfilled, (state, action) => {
			state.allIssue = action.payload;
		});
	},
});

export const {
	addToAllIssues,
	addToOpenIssue,
	addToActiveIssue,
	addToresolvedIssue,
	removeFromOpenIssue,
	removeFromActiveIssue,
	removeFromResolvedIssue,
} = issueSlice.actions;

export default issueSlice.reducer;
