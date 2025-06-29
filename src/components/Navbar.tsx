import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex flex-between fixed z-50 w-full px-6 py-4 lg:px-10'
    style={{backgroundColor: "1C1F2E"}}>
         <Link
            href="/"
            className='flex items-center gap-1'
         >
            <Image
                src="/icons/logo.svg"
                width={32}
                height={32}
                alt="Meetify"
                className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-white max-sm:hidden'>Meetify</p>
         </Link>
         <div className='flex-between gap-5'>
            <SignedIn>
                <UserButton />
            </SignedIn>
            {/* we will protect our route as we want authenticated users to access all the routes */}
            <MobileNav />
         </div>
    </nav>
  )
}

export default Navbar