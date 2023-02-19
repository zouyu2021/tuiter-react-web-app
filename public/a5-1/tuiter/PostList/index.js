import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
            <ul class="list-group wd-bookmarks-contains">
            ${posts.map((postList) => PostItem(postList)).join('')}
            </ul>
            `)
}
export default PostList;