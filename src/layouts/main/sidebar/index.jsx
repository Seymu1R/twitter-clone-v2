import Logo from "./logo";
import Menu from "./menu";

export default function SideBar() {
    return (
        <aside className="w-[275px] px-2 min-h-screen flex flex-col" >
            <Logo />
            <Menu />
            <div className="mt-auto">Salam</div>
        </aside>
    )
}