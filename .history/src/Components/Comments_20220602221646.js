import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />


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

