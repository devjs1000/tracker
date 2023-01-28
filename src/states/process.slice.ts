import { createSlice } from "@reduxjs/toolkit";

export const processSlice = createSlice({
    name: "process",
    initialState: {
        loading: false,
        error: null,
        login: false,
        profile: null,
    },
    reducers: {
        load: (state) => {
            state.loading = true;
        },
        loaded: (state) => {
            state.loading = false;
        },
        errorerd: (state, action) => {
            state.error = action.payload;
        },
        login: (state, action) => {
            state.login = true;
            state.profile = action.payload;
        },
        logout: (state) => {
            state.login = false;
            state.profile = null;
        }
    }
});

export const { load, loaded, errorerd, login, logout } = processSlice.actions;

export default processSlice.reducer;
