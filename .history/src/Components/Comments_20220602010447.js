import React from 'react'

function Comments() {

    let commentField = document.getElementsByClassName('form-group')

    return (
        <div className="form-group">
            <label for="textArea1">Comments</label>
            <textarea rows="5"></textarea>
            <button type="submit" className="btn btn-primary" onClick={() => { commentField.innerHTML = '';}}
            >Submit</button>
        </div>
    )
}

export default Comments