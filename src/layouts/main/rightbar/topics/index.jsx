import Topic from "./topic/index.jsx";
import {topics} from "../../../../utils/const.jsx";
import {SidebarSection} from "../../../../components/sidebar-section/index.jsx";

export default function Topics() {
    return (
        <section className="bg-[color:var(--background-secondary)] overflow-hidden mb-4 rounded-2xl border border-[#16181c]">
            <SidebarSection title={"Trends for you"} more={true}>
                {topics.map((topic, index) => <Topic item={topic} key={index} />)}
            </SidebarSection>
        </section>
    )
}