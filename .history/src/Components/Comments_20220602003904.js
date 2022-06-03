import React from 'react'

function Comments() {

        let commentField = document.querySelector('.comments')

    return (
        <div class="form-group">
            <label for="text-field" class="">Comments</label>
            <textarea rows="5"></textarea>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default Comments