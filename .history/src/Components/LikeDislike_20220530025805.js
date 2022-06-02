import React from 'react'
import { useParams } from 'react-router-dom';


function LikeDislike() {


    let { id } = useParams();


    useEffect(() => {
        if (id) {
            arrayPlaylistFunc(id)
        }
    }, [id])


    return (
        <div>LikeDislike</div>
    )
}

export default LikeDislike