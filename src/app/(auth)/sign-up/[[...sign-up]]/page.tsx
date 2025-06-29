import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex h-full w-full items-center justify-center'>
        <SignUp path="/sign-up" routing="path"/>
    </main>
  )
}

export default SignUpPage