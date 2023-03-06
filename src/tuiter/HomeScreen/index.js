import PostSummaryList from "../post-summary-list";
import NavigationSidebar from "../navigation-sidebar";
import PostList from "../PostList";
import './HomeScreen2.css';
import './HomeScreen.css';

const HomeScreen = () => {
    return (
        <>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active='home'/>
                </div>

                <div className="col-6 col-lg-7 col-md-10 col-sm-10 col-xl-6 col-xxl-6 pe-2 wd-main-content">
                    <PostList/>
                </div>

                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList/>
                </div>
            </div>
        </>
    )

}

export default HomeScreen;