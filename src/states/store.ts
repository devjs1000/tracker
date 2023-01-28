import { configureStore } from "@reduxjs/toolkit";
import processSlice from "./process.slice";

const store = configureStore({
    reducer: {
        process: processSlice,
    },
});

export default store;
