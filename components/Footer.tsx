import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' bottom-0 fixed w-full bg-gray-800 flex p-4 justify-between items-center'>
      {/* Brand Logo */}
      <h1 className='text-white font-extrabold text-3xl cursor-pointer hover:text-teal-300 transition'>
        <Link href='/'>
          Next Js
        </Link>
      </h1>
      
      {/* Copyright Text */}
      <p className='text-white text-lg font-semibold'>
        © {new Date().getFullYear()} All Rights Reserved
      </p>
      
      {/* Social Links */}
      <ul className='flex space-x-6 text-white font-bold'>
        <li className='hover:text-teal-300 transition'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            Facebook
          </a>
        </li>
        <li className='hover:text-teal-300 transition'>
          <a href='https://www.github.com' target='_blank' rel='noopener noreferrer'>
            Github
          </a>
        </li>
        <li className='hover:text-teal-300 transition'>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
