import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='top fixed w-full bg-gray-800 flex p-4 justify-between'>
      <h1 className='text-white font-extrabold text-3xl cursor-pointer'>
        <Link href='/'>Next Js</Link>
      </h1>
      <ul className='flex gap-14 text-white text-xl items-center cursor-pointer'>
        <li className='hover:bg-teal-600 hover:font-bold hover:ease-in-out transition p-2 rounded-lg'>
          <Link href='/'>Home</Link>
        </li>
        <li className='hover:bg-teal-600 hover:font-bold hover:ease-in-out transition p-2 rounded-lg'>
          <Link href='/about'>About</Link>
        </li>
        <li className='hover:bg-teal-600 hover:font-bold hover:ease-in-out transition p-2 rounded-lg'>
          <Link href='/career'>Career</Link>
        </li>
        <li className='hover:bg-teal-600 hover:font-bold hover:ease-in-out transition p-2 rounded-lg'>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
      <div className='flex space-x-2'>
        <button className='bg-teal-600 hover:bg-teal-700 text-white border rounded-lg p-2'>
          Register
        </button>
        <button className='bg-teal-600 hover:bg-teal-700 text-white border rounded-lg p-2'>
          SignUp
        </button>
      </div>
    </div>
  )
}

export default Navbar
