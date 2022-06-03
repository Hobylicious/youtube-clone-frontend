import React from 'react'


function Comments() {

    return (
        <div className="form-comment">
            <form action="https://youtube-clone-backend-ga.herokuapp.co/api/comment/saveComment" method="post">
                <div>
                    <textarea placeholder='Enter your comment' name="comments" ></textarea>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Comments

