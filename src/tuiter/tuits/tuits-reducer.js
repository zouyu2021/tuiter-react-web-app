import {createSlice} from "@reduxjs/toolkit";
import tuits from './posts.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";


const initialState = {
    tuits: [],
    loading: false,
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name: 'tuits',
    // initialState: tuits,
    initialState,
    extraReducers: {
        [findTuitsThunk.pending]: (state) => {
            state.loading = true;
            state.tuits = [];
        },
        [findTuitsThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = payload;
        },
        [findTuitsThunk.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [deleteTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.tuits = state.tuits.filter(t => t._id !== payload);
        },
        [createTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            state.tuits.push(payload)
        },
        [updateTuitThunk.fulfilled]: (state, {payload}) => {
            state.loading = false
            const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id)
            state.tuits[tuitNdx] = {
                ...state.tuits[tuitNdx], ...payload
            }
        }
    },
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
        likeTuit(state, action) {
            // If the tuit is already liked, unlike it
            const tuit = state.find(tuit =>
                tuit._id === action.payload);
            if (tuit.liked) {
                tuit.liked = false;
                tuit.likes--;
            } else {
                tuit.liked = true;
                tuit.likes++;
            }
        }
    }
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;