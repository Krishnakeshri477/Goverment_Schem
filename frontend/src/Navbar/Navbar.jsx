import React from 'react'
import {Route,Routes,Link} from 'react-router'

function Navbar() {
    return (
        <div className='w-full h-75 bg-[url(https://d-maps.com/m/asia/india/jharkhand/jharkhand69.gif)] bg-center bg-cover mb-4'>
            <div className='h-60 mx-20 '>
                <div className='flex justify-between p-10'>
                    <div className='w-45 h-40 '>
                        <img src="./public/WhatsApp Image 2025-05-05 at 13.17.19_81815701.jpg" className='bg-cover bg-center' />
                    </div>
                    <div className='w-full h-40 text-9xl text-green-900 px-40 uppercase font-semibold italic'>
                        jannyojna
                    </div>
                </div>
                <div className='underline uppercase flex justify-end gap-9 text-4xl'>
                    <Link to="./src/Pages/Home.jsx">Home</Link>
                    <Link to="./src/Pages/About.jsx">About</Link>
                    <Link to="./src/Pages/Context.jsx">Contact us</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
