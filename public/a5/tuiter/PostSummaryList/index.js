import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
        posts.map(post => PostSummaryItem(post))
            .reduce((prev, current) => prev + current, '')
    )
}

export default PostSummaryList;