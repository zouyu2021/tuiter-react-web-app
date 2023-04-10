import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
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
            <div className="col">
                Likes: {tuit.likes}&nbsp;
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: tuit.likes + 1
                }))} className="bi bi-heart-fill me-2 text-danger"></i>
            </div>
            <div className="col">
                Dislikes: {tuit.dislikes}&nbsp;
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: (tuit.dislikes || 0) + 1
                }))} className="bi bi-hand-thumbs-down-fill me-2"></i>
            </div>
            <div className="col">
                <i className="fas fa-external-link-alt me-2"></i>
            </div>
        </div>)
}

export default TuitStats;
