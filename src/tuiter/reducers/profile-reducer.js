import {createSlice} from "@reduxjs/toolkit";
import {profileInfo} from "./profile-data";

const profileSlice = createSlice({
    name: "profile",
    initialState: profileInfo,
    reducers: {
        updateProfile: (state, action) => {
            return action.payload;
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;