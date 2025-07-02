"use client"

import Image from 'next/image'
import React from 'react'
import DateAndTime from './DateAndTime'

const StatusBar = () => {
  return (
    <section className='flex flex-col gap-5 text-white items-center md:items-start'>
        <DateAndTime />
        {/* <Image
            src='/icons/Home.svg'
            width={300}
            height={300}
            alt="home image"
            className='max-md:hidden -ml-16'
        /> */}
    </section>
  )
}

export default StatusBar