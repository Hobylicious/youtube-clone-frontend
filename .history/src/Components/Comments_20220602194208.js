import React from 'react'
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>


function Comments() {

    let commentField = document.getElementsByClassName('form-group')

    return (
        <div className="form-">
            <form action="https://youtube-clone-backend-ga.herokuapp.co/api/comment/saveComment" method="post">
                <div>
                    <textarea placeholder='Enter your comment' name="comments" ></textarea>
                </div>
                <input type="submit" value="Submit" />
                
            </form><button class="btn btn-primary">sdsdsd</button>
            {/* <label for="textArea1">Comments</label>
            <textarea rows="5"></textarea>
            <button onClick="href='https://w3docs.com'">Click Here</button> */}
        </div>
    )
}

export default Comments