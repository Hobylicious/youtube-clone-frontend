import React from 'react'

function Comments() {

    let commentField = document.getElementsByClassName('form-group')

    return (
        <div className="form-group">
            <form action="/api/comment" method="post">
                <div>
                    <textarea name="comments" id="comments" style="font-family:sans-serif;font-size:1.2em;">
                        Hey... say something!
                    </textarea>
                </div>
                <input type="submit" value="Submit"/>
            </form>
            {/* <label for="textArea1">Comments</label>
            <textarea rows="5"></textarea>
            <button onClick="href='https://w3docs.com'">Click Here</button> */}
        </div>
    )
}

export default Comments