import Search from "./search/index.jsx";
import Premium from "./premium/index.jsx";
import Topics from "./topics/index.jsx";
import {WhoFollow} from "./who-follow/index.jsx";
import Footer from "./footer/index.jsx";

export default function RightBar() {
    return (
        <aside className="w-[350px] mr-2.5">
            <Search/>
            <Premium/>
            <Topics/>
            <WhoFollow/>
            <Footer/>
        </aside>
    )
}