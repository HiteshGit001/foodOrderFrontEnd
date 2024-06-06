import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        loggerId: "",
        location:"",
        userLatLong:["",""]
    }
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        updateUserData: (state, action) => {
            return {
                ...state,
                userData: action.payload,
            }
        }
    }
})

export const {
    updateUserData,
} = authSlice.actions;

export default authSlice.reducer;