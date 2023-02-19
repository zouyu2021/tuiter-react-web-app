import whoToFollowListItem from "./WhoToFollowListItem.js";
import who from './who.js';
const WhoToFollowList = () => {
    return(`
    <div class="list-group">
    <li class="list-group-item"><b>Who to follow</b></li>
    ${who.map((item) => whoToFollowListItem(item))
        .reduce((prev, current) => prev + current, '')}
    </div>
`);
}
export default WhoToFollowList;