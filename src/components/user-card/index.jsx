import Button from "../button/index.jsx";
import {useState} from "react";

export default function UserCard({ user }) {
    const [following, setFollowing] = useState(false);

    const handleButtonClick = (e) => {
        e.preventDefault(); // Prevent the default behavior (navigation)
        e.stopPropagation(); // Stop the event from propagating to the parent elements
        setFollowing(!following);
    };

    return (
        <a href="/profile" className="py-3 px-4 flex gap-3 transition-colors hover:bg-white/[0.03]">
            <img src={user.avatar} className="w-10 h-10 rounded-full object-cover" alt="" />
            <div className="flex-1 max-w-full flex flex-col text-left">
                <div className="text-[15px] leading-5 font-bold flex items-center">{user.fullName}</div>
                <div className="text-[15px] text-[color:var(--color-base-secondary)]">@{user.userName}</div>
            </div>
            <div>
                {following ? (
                    <Button
                        variant="white-outline"
                        size="small"
                        onClick={handleButtonClick}
                        className="whitespace-nowrap group"
                    >
                        <div className="flex group-hover:hidden">Following</div>
                        <div className="hidden group-hover:flex">Unfollow</div>
                    </Button>
                ) : (
                    <Button variant="white" size="small" onClick={handleButtonClick}>
                        Follow
                    </Button>
                )}
            </div>
        </a>
    );
}