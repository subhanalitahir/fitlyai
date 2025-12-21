import { SignedIn, SignedOut, SignIn, SignInButton, SignOutButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      Home
      <SignedIn>
        <SignOutButton/>
      </SignedIn>
      <SignedOut>
        <SignInButton/>
      </SignedOut>
    </div>
  )
}

export default Home