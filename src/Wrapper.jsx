import React from 'react'
import Navbar from './Components/Navbar'
import { Link, Outlet } from 'react-router-dom'

import cityBackground from './assets/city-bg.jpg'

function Wrapper() {
    return (
        <div className='flex flex-col justify-start items-stretch h-[100vh] relative'
            style={{
                backgroundImage: `url('${cityBackground}')`,
                // height: `400px`
            }}
        >
            <Navbar />

            <Outlet />

            <div className='absolute right-4 bottom-[12vh] sm:bottom-4'>
                <Link
                    to="/aboutme"
                    className='bg-white bg-opacity-10 backdrop-blur-lg p-4 rounded-xl flex flex-row items-center justify-center cursor-pointer text-white font-bold'
                >About Me</Link>
            </div>
        </div>
    )
}

export default Wrapper