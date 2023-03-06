import React from "react";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import {Routes, Route} from "react-router";
import Nav from "../nav";

function Tuiter() {
    return (
        <>
            <Nav />
            <Routes>
                <Route path="" element={<ExploreScreen/>}/>
                <Route path="home" element={<HomeScreen/>}/>
                <Route path="explore" element={<ExploreScreen/>}/>
            </Routes>
        </>
    );
}

export default Tuiter