import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: "",
    },
    reducers: {
        authUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export default authSlice.reducer;