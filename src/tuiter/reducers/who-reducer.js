import { createSlice } from "@reduxjs/toolkit";
import whoArray from "../data/who.json";
// import slice
// import data from JSON file
const whoSlice = createSlice({
    name: "who",
    initialState: whoArray
});
export default whoSlice.reducer;