import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreComponent";
import WhoToFollowList from "../WhoToFollowList";

function exploreComponent() {
    $('#wd-explore').append(`
<div class="container mt-2">
<div class="row mt-2">
<div class="col-2 col-lg-1 col-xl-2 col-xxl-2 pe-2 wd-menu">
<!--<h3>NavigationSidebar</h3>-->
${NavigationSidebar('Explore')}
</div>
<div class="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 pe-2 wd-main-content">
<!--<h3>ExploreComponent</h3>-->
${ExploreComponent()}
</div>
<div class="d-none d-lg-block col-4 col-lg-4 wd-follow-suggest">
<!--<h3>WhoToFollowList </h3>-->
${WhoToFollowList()}
</div>
</div>
</div>
`);
}
$(exploreComponent);