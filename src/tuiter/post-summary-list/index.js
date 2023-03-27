import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";
import {findTuitsThunk} from "../../services/tuits-thunks.js";
import TuitItem from "../tuits/TuitList/TuitItem";


const PostSummaryList = () => {
    // const postsArray = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit =>
                    <TuitItem
                        key={tuit._id}
                        tuit={tuit}/>
                )
            }
        </ul>
    );
};

//     return(
//         <ul className="list-group">
//             {postsArray.map(post =>
//                     <PostSummaryItem
//                         key={post._id}
//                         post={post}
//                     />
//                 )
//             }
//         </ul>
//     );
// };
export default PostSummaryList;