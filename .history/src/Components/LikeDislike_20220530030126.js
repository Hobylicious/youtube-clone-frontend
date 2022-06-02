import React from 'react'



function LikeDislike({ arrayPlaylistFunc }) {


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