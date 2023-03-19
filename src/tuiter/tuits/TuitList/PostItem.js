import React from "react";


const PostItem = (
    postList = {
        "icon": "tesla.png",
        "author": "SpaceX",
        "handler": "@spacex",
        "time": "2h",
        "text": "You want to wake up in the morning and think the future is going to be great - and that’s what being a space faring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars\"},\n",
        "icon2": "<i classname=\"fas fa-link\"></i>&nbsp;",
        "replyNumber": "4.2k",
        "retweetNumber": "3.5k",
        "favoriteNumber": "37.5k",
        "shareNumber": ""
    }
) => {
    var postList = postList.post;
    const topicBlockTitle = postList.title ?
        <div className="wd-home-partF-title">{postList.title}</div>
        : ""

    const topicBlockText3 = postList.text3 ?
        <div className="wd-home-partF-text">{postList.text3}</div>
        : ""

    const topicBlockWebsite = postList.website ?
        <div className="wd-home-partF-text">
            <i className="fas fa-link"/>&nbsp;
            {postList.website}
        </div>
        : ""

    const hasDescription = postList.title
        || postList.text3
        || postList.website;

    return (
        <>
            <li className="wd-home-partB-C-D-E-F-G">
                <div className="wd-home-partB wd-home-left-side">
                    <img src={postList.icon} className="wd-home-B-image"/>
                </div>

                <div className="wd-home-right-side">
                    <div className="wd-home-partC&D">
                        <div className="wd-home-partC">
                            <div>
                                <span className="wd-home-partC-author"><b>{postList.author}</b> </span>
                                <i className="fa fa-check-circle"/>
                                <span
                                    className="wd-home-partC-handle">{postList.handler} &middot; {postList.time}</span>

                            </div>
                            <div>
                                <i className="fas fa-ellipsis-h wd-home-threeDot-color"/>
                            </div>
                        </div>

                        <div className="wd-home-partD">
                    <span>
                        {postList.text}
                        <a href="#">{postList.hyperlink}</a>
                        {postList.text2}
                    </span>
                        </div>
                    </div>

                    <div className="wd-home-partE-F wd-home-partE-F-border">
                        <div className={`wd-home-partE ${hasDescription ? '' : 'border-0'}`}>
                            <img src={postList.image}
                                 className={`wd-home-partE-image ${hasDescription ? '' : 'wd-home-bottom-round'}`}
                                 alt={postList.title}/>
                        </div>

                        <div className="wd-home-partF">
                            {topicBlockTitle}
                            {topicBlockText3}
                            {topicBlockWebsite}
                        </div>
                    </div>

                    <div className="wd-home-partG">
                        <div>
                            <a href="#" className="wd-home-partG-hyperlink">
                        <span>
                            <i className="fa fa-comment"/>&nbsp;&nbsp;&nbsp;
                            {postList.replyNumber}
                        </span>
                            </a>

                        </div>
                        <div>
                            <a href="#" className="wd-home-partG-hyperlink">
                                <i className="fa fa-recycle"/>&nbsp;&nbsp;&nbsp;
                                {postList.retweetNumber}
                            </a>
                        </div>
                        <div>
                            <a href="#" className="wd-home-partG-hyperlink">
                                <i className="fa fa-heart"/>&nbsp;&nbsp;&nbsp;
                                {postList.favoriteNumber}
                            </a>
                        </div>
                        <div>
                            <a href="#" className="wd-home-partG-hyperlink">
                                <i className="fa fa-upload"/>&nbsp;&nbsp;&nbsp;
                                {postList.shareNumber}
                            </a>
                            <span className="wd-home-icon-num-space">{postList.shareNumber}</span>
                        </div>
                    </div>
                </div>

            </li>
        </>


    )
}

export default PostItem;