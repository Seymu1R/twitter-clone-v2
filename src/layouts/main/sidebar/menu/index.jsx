import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <div className="p-3 rounded-full flex  items-center gap-5 text-xl" >
                <Link to="/" >
                    <svg fill="#fff" width={26.25} height={26.25} viewBox="0 0 24 24" className="r-1nao33i r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-cnnz9e"><path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z" /></svg>
                </Link>
                Anasayfa
            </div>
        </nav>
    )
}