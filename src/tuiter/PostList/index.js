import posts from "./posts.json";
import PostItem from "./PostItem.js";
import React from "react";

const PostList = () => {
    console.log(posts);
    return (
        <ul className="list-group wd-home-bookmarks-container">
            {posts.map((post) => {
                return (<PostItem post={post}/>);
            })}
        </ul>
    )
}
export default PostList;