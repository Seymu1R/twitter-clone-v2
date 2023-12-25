import {useParams} from "react-router-dom";

export default function Profile() {

    const {slug} = useParams()

    console.log(slug)

    return (
        <div>
            profile page - {slug}
        </div>
    )
}
