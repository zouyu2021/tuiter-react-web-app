import React, {useEffect} from "react";
import TuitsList from "../tuits/TuitList";
import WhatsHappening from "./whats-happening";
const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;