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
                Home
            </Link>
            <Link to={'/tuiter/explore'} className={`list-group-item
${active === 'explore'?'active':''}`}>
                Explore
            </Link>
            <a className={`list-group-item
${active === 'notifications'?'active':''}`}>
                Notifications
            </a>
            <a className={`list-group-item
${active === 'messages'?'active':''}`}>
                Messages
            </a>
            <a className={`list-group-item
${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </a>
            <a className={`list-group-item
${active === 'lists'?'active':''}`}>
                Lists
            </a>
            <a className={`list-group-item
${active === 'profile'?'active':''}`}>
                Profile
            </a>
            <a className={`list-group-item
${active === 'more'?'active':''}`}>
                More
            </a>
        </div>
    );
};
export default NavigationSidebar;