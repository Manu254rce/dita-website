// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/navbar'

const Home = () => {
  return (
    <main className="flex flex-col h-screen w-full 
                     bg-gradient-to-tr p-4 from-slate-300 to-blue-500
                     dark:bg-gradient-to-tr dark:from-slate-900 dark:to-blue-500">
    <Navbar/>
    <div className="h-3/5 p-5 max-md:p-6 mx-auto my-auto w-full flex flex-col justify-between">
        <h1 className='text-7xl font-bold font-sans text-center dark:text-white max-sm:text-5xl'>Dita Website</h1>
        <h1 className='text-2xl font-bold font-sans text-center max-sm:text-md dark:text-white'>Coming Soon</h1>
        <h1 className='text-md max-sm:text-sm font-sans text-center dark:text-white'>
            To edit this page, go to <code className='text-md max-sm:text-sm text-center dark:text-white'>dita-website\src\pages\home\home.jsx</code> 
        </h1>
    </div>
    <h1 className='text-sm text-center mb-16 dark:text-white'>Open from 
       <a href='https://github.com/dita-daystaruni/dita-website'
       className='text-green-600'> Github</a></h1>
    <h1 className="dark:text-white max-sm:text-sm">Copyright 2023</h1>
    </main>
  )
}

export default Home