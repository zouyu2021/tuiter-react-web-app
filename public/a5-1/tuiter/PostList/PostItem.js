const PostItem = (postList) => {
    const topicBlockTitle = postList.title ?
        `<div class="wd-partF-title">${postList.title}</div>`
        : ""

    const topicBlockText3 = postList.text3 ?
        `<div class="wd-partF-text">${postList.text3}</div>`
        : ""

    const topicBlockWebsite = postList.website ?
        `<div class="wd-partF-text">
             ${postList.icon2}&nbsp;
             ${postList.website}
         </div>`
        : ""

    const hasDescription = postList.title
        || postList.text3
        || postList.website;

    return (`
     <!--Part B, C, D, E, F and G-->

    <li class="wd-partB-C-D-E-F-G">
        <!--part B-->
        <div class="wd-partB wd-left-side">
            <img src="${postList.icon}" class="wd-B-image">
        </div>

        <div class="wd-right-side">
            <!--part C&D-->
            <div class="wd-partC&D">
                <!--part C-->
                <div class="wd-partC">
                    <div>
                        <span class="wd-partC-author"><b>${postList.author}</b> </span>
                        <i class="fa fa-check-circle"></i>
                        <span class="wd-partC-handle">${postList.handler} &middot; ${postList.time}</span>
                  
                    </div>
                    <div>
                        <i class="fas fa-ellipsis-h wd-threeDot-color"></i>
                    </div>
                </div>

                <!--part D-->
                <div class="wd-partD">
                    <span>
                        ${postList.text}                    
                        <a href="#" >${postList.hyperlink}</a>                             
                        ${postList.text2}
                    </span>
                </div>
            </div>

            <!--part E&F-->
            <div class="wd-partE-F wd-partE-F-border">
                <!--part E-->
                <div class="wd-partE ${hasDescription ? `` : `border-0`}"">
                    <img src="${postList.image}" 
                    class="wd-partE-image ${hasDescription ? `` : `wd-bottom-round`}">
                </div>

                <!--part F-->
                <div class="wd-partF">
                    ${topicBlockTitle}
                    ${topicBlockText3}
                    ${topicBlockWebsite}
                </div>
            </div>

            <!--    Part G-->
            <div class="wd-partG">
                <div>
                    <a href="#" class="wd-partG-hyperlink">
                        <span>
                            <i class="fa fa-comment"></i>&nbsp&nbsp&nbsp
                            ${postList.replyNumber}
                        </span>
                    </a>
                   
                </div>
                <div>
                    <a href="#" class="wd-partG-hyperlink">
                        <i class="fa fa-recycle"></i>&nbsp&nbsp&nbsp
                        ${postList.retweetNumber}
                    </a>
                </div>
                <div>
                    <a href="#" class="wd-partG-hyperlink">
                        <i class="fa fa-heart"></i>&nbsp&nbsp&nbsp
                        ${postList.favoriteNumber}
                    </a>
                </div>
                <div>
                    <a href="#" class="wd-partG-hyperlink">
                        <i class="fa fa-upload"></i>&nbsp&nbsp&nbsp
                        ${postList.shareNumber}
                    </a>
                    <span class="wd-icon-num-space">${postList.shareNumber}</span>
                </div>
            </div>
        </div>

    </li>
    
        
`)
}

export default PostItem;