import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const saveUser = createAsyncThunk("data/saveUser", async (data) => {
    console.log(data);
    try {
        const res = await fetch("https://somadhan-server.up.railway.app/users", {
            method: data.method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data.user),
        });
        const response = await res.json();
        return response;
    } catch (err) {}
});

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
    extraReducers: (builder) => {
        builder.addCase(saveUser.fulfilled, (state, action) => {
            console.log(action.payload);
        });
    },
});

export const { setUser, setName, setError, setIsLoading, setAdmin, setToken } =
    firebaseSlice.actions;

export default firebaseSlice.reducer;
