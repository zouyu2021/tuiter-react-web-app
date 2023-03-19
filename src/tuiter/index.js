import React from "react";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import {Route, Routes} from "react-router";
import Nav from "../nav";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./ProfileComponent";
import EditProfile from "./EditProfile";

const store = configureStore({
    reducer:
        {
            who: whoReducer,
            tuits: tuitsReducer,
            profile: profileReducer
        }
});

function Tuiter() {
    return (
        <Provider store={store}>
            <>
                <Nav/>
                <Routes>
                    <Route path="" element={<ExploreScreen/>}/>
                    <Route path="home" element={<HomeScreen/>}/>
                    <Route path="explore" element={<ExploreScreen/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                </Routes>
            </>
        </Provider>
    );
}

export default Tuiter