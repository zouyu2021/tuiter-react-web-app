import TuitItem from "./TuitItem.js";
import React from "react";
import {useSelector} from "react-redux";

const TuitList = () => {
    const postsArray = useSelector(state => state.tuits);
    return (
        <ul className="list-group wd-home-bookmarks-container">
            {postsArray.map((post) => {
                return <TuitItem tuit={post} key={post._id}/>
            })}
        </ul>
    )
}
export default TuitList;