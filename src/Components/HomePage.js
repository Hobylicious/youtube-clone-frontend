import React from 'react'
import Header from './Header'
import History from './History'
import Profile from './UserProfile'
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from './AuthButton'



function HomePage() {
    const {user} = useAuth0()
    console.log({user})
    return (
        <>
            <Header />
            <div>Home Page</div>
            <History />
            <AuthenticationButton/>
            <Profile/>
        </>
    )
}

export default HomePage