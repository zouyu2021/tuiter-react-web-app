import PostSummaryList from "../post-summary-list/index.js";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="input-group mb-2 wd-search-group">
                        <span className="input-group-text wd-search-icon" style="background: white; color:lightgrey">
                            <i className="fas fa-search "></i>
                        </span>
                        <input type="text" className="form-control border-start-0" placeholder="Search Twitter"/>
                    </div>
                </div>

                <div className="col-1">
                    <i className="fas fa-cog fa-2x" style="color: #2a9fd6"></i>
                </div>
            </div>
            <!--            Tabs-->
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="for-you-tab" data-bs-toggle="tab" data-bs-target="#for-you"
                            type="button" role="tab" aria-controls="for-you" aria-selected="true">For you
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link " id="trending-tab" data-bs-toggle="tab" data-bs-target="#trending"
                            type="button" role="tab" aria-controls="trending" aria-selected="false">Trending
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="news-tab" data-bs-toggle="tab" data-bs-target="#news" type="button"
                            role="tab" aria-controls="news" aria-selected="false">News
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="sports-tab" data-bs-toggle="tab" data-bs-target="#sports"
                            type="button"
                            role="tab" aria-controls="sports" aria-selected="false">Sports
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link d-none d-md-block" id="entertainment-tab" data-bs-toggle="tab"
                            data-bs-target="#entertainment"
                            type="button" role="tab" aria-controls="entertainment" aria-selected="false">Entertainment
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="for-you" role="tabpanel" aria-labelledby="for-you-tab">
                    <!--            Image-->
                    <div className="mt-2">
                        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg"
                             className="card-img-top"/>
                        <div className="wd-image-text"> SpaceX's Starship</div>
                    </div>

                    <div className="list-group mb-2 wd-position">
                        <PostSummaryList/>
                    </div>
                </div>
            </div>
        </>);
}

export default ExploreComponent;