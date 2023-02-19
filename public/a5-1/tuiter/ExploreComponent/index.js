import PostSummaryList from "../PostSummaryList";
const ExploreComponent = () => {
    return(`
<!--            input row-->
            <div class="row">
                <div class="col-11">
                    <div class="input-group mb-2 wd-search-group">
                        <span class="input-group-text wd-search-icon" style="background: white; color:lightgrey">
                            <i class="fas fa-search "></i>
                        </span>
                        <input type="text" class="form-control border-start-0" placeholder="Search Twitter">
                    </div>

                </div>

                <div class="col-1">
                    <i class="fas fa-cog fa-2x" style="color: #2a9fd6"></i>
                </div>
            </div>
            <!--            Tabs-->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="for-you-tab" data-bs-toggle="tab" data-bs-target="#for-you"
                            type="button" role="tab" aria-controls="for-you" aria-selected="true">For you
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link " id="trending-tab" data-bs-toggle="tab" data-bs-target="#trending"
                            type="button" role="tab" aria-controls="trending" aria-selected="false">Trending
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="news-tab" data-bs-toggle="tab" data-bs-target="#news" type="button"
                            role="tab" aria-controls="news" aria-selected="false">News
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="sports-tab" data-bs-toggle="tab" data-bs-target="#sports" type="button"
                            role="tab" aria-controls="sports" aria-selected="false">Sports
                    </button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link d-none d-md-block" id="entertainment-tab" data-bs-toggle="tab" data-bs-target="#entertainment"
                            type="button" role="tab" aria-controls="entertainment" aria-selected="false">Entertainment
                    </button>
                </li>
            </ul>
    <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="for-you" role="tabpanel" aria-labelledby="for-you-tab">
                    <!--            Image-->
                    <div class="mt-2">
                        <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="card-img-top">
                        <div class="wd-image-text"> SpaceX's Starship</div>
                    </div>

                    <div class="list-group mb-2 wd-position">
                    ${PostSummaryList()}
                    </div>
                </div>
    </div>
`);
}

export default ExploreComponent;