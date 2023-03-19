import React from "react";
import './tuit.css';
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../tuits-reducer";

const TuitItem = ({tuit}) => {
    const dispatch = useDispatch();
    /*A7-7. Deleting Tweets*/
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <table>
                <tbody>
                <tr>
                    <td className="align-text-top">
                        <img className="rounded-circle wd-avatar-image"
                             src={`/images/${tuit.image}`}/>
                    </td>
                    <td className="ps-3" style={{width: '100%'}}>
                        <i
                            onClick={() => deleteTuitHandler(tuit._id)}
                            className="fas fa-times fa-pull-right" />
                        <span className="fw-bold">{tuit.userName}</span>
                        {tuit.verified && <i className="fa fa-check-circle" style={{color: 'cornflowerblue'}} />}
                        <span className="ms-1 text-secondary">{tuit.handle}</span>
                        <div>
                            {tuit.tuit}
                        </div>
                        <TuitStats tuit={tuit}/>
                    </td>
                </tr>
                </tbody>
            </table>
        </li>
    );
};

export default TuitItem;