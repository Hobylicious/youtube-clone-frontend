import React from 'react'
use

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