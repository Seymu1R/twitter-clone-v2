import Logo from "./logo";
import Menu from "./menu";
import Account from "./account/index.jsx";

export default function SideBar() {
    return (
        <aside className="w-[275px] px-2 min-h-screen flex flex-col" >
            <Logo />
            <Menu />
            <Account/>
        </aside>
    )
}