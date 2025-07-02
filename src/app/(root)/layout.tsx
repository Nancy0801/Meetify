
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React, { ReactNode } from 'react'

const RootLayout = async ({ children } : {children: ReactNode}) => {

  const user = await currentUser()
  if (!user) {
    redirect('/sign-in') 
  }

  return (
    <main className='animate-fade-in'>
        {children}
    </main>
  )
}

export default RootLayout
