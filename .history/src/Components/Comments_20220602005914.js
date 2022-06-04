import React from 'react'

function Comments() {

    let commentField = document.getElementsByClassName('form-group')

    return (
        <div class="form-group">
            <label for="textArea1">Comments</label>
            <textarea rows="5"></textarea>
            <button type="submit" className="btn btn-primary" onClick={() => { commentField.style.backgroundColor = 'blue' }}
            >Submit</button>
        </div>
    )
}

export default Comments