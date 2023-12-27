import {SidebarSection} from "../../../../components/sidebar-section/index.jsx";
import UserCard from "../../../../components/user-card/index.jsx";
import {whoFollowUsers} from "../../../../mock/index.js";

export function WhoFollow() {
    return (
        <SidebarSection title={"Who to follow"} more={true}>
            {whoFollowUsers.map(user => <UserCard user={user} key={user.id} />)}
        </SidebarSection>
    )

}
