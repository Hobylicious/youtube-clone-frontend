import React from 'react'

function Signup() {
    return (
        <form class="form-inline">
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Email</label>
                <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
            </div>
            <div class="form-group mx-sm-3 mb-2">
                <label for="inputPassword2" class="sr-only">Password</label>
                <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
        </form>
    )
}

export default Signup