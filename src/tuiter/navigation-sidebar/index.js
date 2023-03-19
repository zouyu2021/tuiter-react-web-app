import React from "react";
import {Link} from "react-router-dom";
const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <Link to={'/tuiter'} className="list-group-item">Tuiter</Link>
            <Link to={'/tuiter/home'} className={`list-group-item
${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-home"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Home</div>
                </div>
            </Link>
            <Link to={'/tuiter/explore'} className={`list-group-item
${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-hashtag"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Explore</div>
                </div>
            </Link>
            <a className={`list-group-item
${active === 'labs'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fas fa-asterisk"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Labs</div>
                </div>
            </a>
            <a className={`list-group-item
${active === 'notifications'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fas fa-bell"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Notification</div>
                </div>
            </a>
            <a className={`list-group-item
${active === 'messages'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-envelope"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Messages</div>
                </div>
            </a>
            <a className={`list-group-item
${active === 'bookmarks'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-bookmark"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Bookmarks</div>
                </div>
            </a>
            <a className={`list-group-item
${active === 'lists'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-list"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Lists</div>
                </div>
            </a>
            <Link to={'/tuiter/profile'} className={`list-group-item
${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa fa-user"></i>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">Profile</div>
                </div>
            </Link>
            <a className={`list-group-item
${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <span className="fa-stack wd-more">
                                <i className="fas fa-circle fa-stack-1x"></i>
                                <i className="fas fa-ellipsis-h fa-stack-1x wd-dots"></i>
                            </span>
                    </div>
                    <div className="col-10 d-none d-xl-block wd-links">More</div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;