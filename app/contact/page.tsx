import React from 'react'
import Link from 'next/link'

const Contact = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Contact Us</h1>
      <p className='text-lg text-gray-600 mb-4'>
        We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out to us.
      </p>
      <Link href='/' className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full transition'>
        Back to Home
      </Link>
    </div>
  )
}

export default Contact
