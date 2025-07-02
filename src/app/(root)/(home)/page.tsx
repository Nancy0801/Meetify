import MainMenu from '@/components/MainMenu'
import StatusBar from '@/components/StatusBar'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col gap-32 pt-10 items-center max-md:gap-10 md:flex-row animate-fade-in text-white'>
      <StatusBar/>
      <MainMenu />
    </div>
  )
}

export default Home