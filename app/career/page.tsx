import React from 'react'
import Link from 'next/link'

const Career = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Career Opportunities</h1>
      <p className='text-lg text-gray-600 mb-4'>
        Join our dynamic team and work on exciting projects that challenge your skills. We are always looking for talented individuals to help us innovate and grow.
      </p>
      <Link href='/contact' className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full transition'>
        Contact Us
      </Link>
    </div>
  )
}

export default Career
