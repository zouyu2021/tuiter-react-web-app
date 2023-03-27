import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./TuitItem.js";
import {findTuitsThunk} from "../../../services/tuits-thunks.js";


const TuitList = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group wd-home-bookmarks-container">
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

//     const postsArray = useSelector(state => state.tuits);
//     return (
//         <ul className="list-group wd-home-bookmarks-container">
//             {postsArray.map((post) => {
//                 return <TuitItem tuit={post} key={post._id}/>
//             })}
//         </ul>
//     )
// }
export default TuitList;
