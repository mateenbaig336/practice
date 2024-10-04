import React from 'react'
import Link from 'next/link'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>About Us</h1>
      <p className='text-lg text-gray-600 mb-4'>
        We are a team of passionate developers dedicated to building innovative web solutions. Our mission is to make web development accessible and efficient for everyone.
      </p>
      <Link href='/' className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full transition'>
        Back to Home
      </Link>
    </div>
  )
}

export default About
