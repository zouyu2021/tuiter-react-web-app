// Challenge
const NavigationSidebar = (option) => {
    return(`
<div class="list-group">
                <!--                first row: the icon-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fab fa-twitter"></i>
                        </div>
                    </a>
                </div>
                <!--                second row: Home-->
                <div class="list-group-item ${option == 'Home' ? 'active' : ''}">
                    <a class="row wd-links " href="../HomeScreen/index.html">
                        <div class="col-2">
                            <i class="fa fa-home"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block wd-links">Home</div>
                    </a>
                </div>
                <!--                third row: Explore-->
                <div class="list-group-item ${option == 'Explore' ? 'active' : ''}">
                    <a class="row wd-links-active active" href="../ExploreScreen/index.html">
                        <div class="col-2 active">
                            <i class="fa fa-hashtag"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block active">Explore</div>
                    </a>
                </div>
                <!--                fourth row: Notification-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fas fa-bell"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Notification</div>
                    </a>
                </div>
                <!--                    fifth row: messages-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fa fa-envelope"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Messages</div>
                    </a>
                </div>
                <!--                        sixth row: bookmark-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fa fa-bookmark"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Bookmarks</div>
                    </a>
                </div>

                <!--                        seventh row: Lists-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fa fa-list"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Lists</div>
                    </a>
                </div>

                <!--              eighth row: Profile-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="col-10 d-none d-xl-block">Profile</div>
                    </a>
                </div>

                <!--              nineth row: More-->
                <div class="list-group-item">
                    <a class="row wd-links" href="#">
                        <div class="col-2">
                            <span class="fa-stack wd-more">
                                <i class="fas fa-circle fa-stack-1x"></i>
                                <i class="fas fa-ellipsis-h fa-stack-1x wd-dots"></i>
                            </span>
                        </div>
                        <div class="col-10 d-none d-xl-block">More</div>
                    </a>
                </div>
                <button class="btn btn-primary tweet mt-2">Tweet</button>
            </div>
`);
}
export default NavigationSidebar;