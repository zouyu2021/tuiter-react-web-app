import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../tuits-reducer";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeClickHandler = (id) => {
        dispatch(likeTuit(id));
    };
    return (
        <div className="row mt-2">
        <div className="col">
            <i className="far fa-comment me-2"></i>
            {tuit.replies}
        </div>
        <div className="col">
            <i className="fas fa-retweet me-2"></i>
            {tuit.retuits}
        </div>
        <div className="col"
             onClick={() => likeClickHandler(tuit._id)}>
            {/*{*/}
            {/*    tuit.liked &&*/}
            {/*    <i className="fas fa-heart me-2"*/}
            {/*       style={{color: tuit.liked ? 'red': "white"}}></i>*/}
            {/*}*/}
            {
                !tuit.liked &&
                <i className="far fa-heart me-2"></i>
            }
            Likes: {tuit.likes}&nbsp;
            <i onClick={() => dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
            }))} className="bi bi-heart-fill me-2 text-danger"></i>
        </div>
        <div className="col">
            <i className="fas fa-external-link-alt me-2"></i>
        </div>
    </div>)
}

export default TuitStats;
