import React from 'react'
import AuthButton from './AuthButton'
import UserProfile from './UserProfile'
import { useAuth0 } from "@auth0/auth0-react";


// I put it here for now but feel free to move it anywhere. 

function Header() {

    return (
        <>
        <AuthButton/>
        <UserProfile/>
        </>
    )
}

export default Header