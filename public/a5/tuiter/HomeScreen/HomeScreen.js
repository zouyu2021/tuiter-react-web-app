import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js"
import PostList from "../PostList/index.js";


// import PostList

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
            <div class="col-2 col-lg-1 col-xl-2 col-xxl-2 pe-2 wd-menu">
                 ${NavigationSidebar('Home')}
            </div>
            <div class="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 pe-2 wd-main-content">
                ${PostList()}
            </div>
                 
            <div class="d-none d-lg-block col-4 col-lg-4 wd-follow-suggest">
                ${PostSummaryList()}
            </div>
        </div>
    `);
// eslint-disable-next-line no-undef
})($);