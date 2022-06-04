import React from 'react'

function Comments() {

    let commentField = document.getElementsByClassName('form-group')

    return (
        <div class="form-group">
            <label for="textArea1">Comments</label>
            <textarea rows="5"></textarea>
            <button type="submit" class="btn btn-primary" onclick={() => {
                commentField.style.display = none
            }
            }>Submit</button>
        </div>
    )
}

export default Comments