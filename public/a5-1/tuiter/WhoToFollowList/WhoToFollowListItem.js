const WhoToFollowListItem = (itemInfo) => {
    return(`
    <li class="list-group-item">
                    <div class="row">
                        <div class="col-xxl-3 col-xl-3 col-lg-2 col-md-3 col-sm-3">
                            <img class="rounded-circle" src="${itemInfo.avatarIcon}"
                                 width="50px">
                        </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                            <span class="text-nowrap">
                                <b>${itemInfo.userName}</b>
                                <i class="fa fa-circle"></i>
                            </span>

                            <br/>
                            @${itemInfo.handle}
                        </div>
                        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-3 col-sm-3">
                            <button class="btn btn-primary follow"> Follow</button>
                        </div>
                    </div>
                </li>
`);
}
export default WhoToFollowListItem;