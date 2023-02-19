
const PostSummaryItem = (itemInfo) => {
    return(`
    <div class="list-group-item">
                            <div class="row">
                                <!--         ReactJS       content-->
                                <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-9">
                                    <div class="wd-text">${itemInfo.topic}</div>
                                    <div>
                                        <b>${itemInfo.userName}</b> <i class="fa fa-circle"></i> <span class="wd-text"> - ${itemInfo.time}</span>
                                    </div>
                                    <div>
                                        <b>${itemInfo.title}</b>
                                    </div>
                                </div>

                                <!--                image-->
                                <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-3">
                                    <img class="wd-image-rounded me-2"
                                         src="${itemInfo.image}"
                                         width="85px">
                                </div>
                            </div>
                        </div>
    `);
}

export default PostSummaryItem;