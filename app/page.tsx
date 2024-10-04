import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start bg-gray-100 p-6'>
      <h1 className='text-5xl font-bold text-gray-800 mb-6'>Welcome to Next.js</h1>
      <p className='text-lg text-gray-600 mb-4'>
        Build modern web applications with speed and efficiency. Explore more about Next.js and what it offers.
      </p>
      <Link href='/about' className='bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-full transition mb-6'>
        Learn More
      </Link>

      {/* Additional Content */}
      <section className='mb-8'>
        <h2 className='text-4xl font-semibold text-gray-800 mb-4'>Why Next.js?</h2>
        <p className='text-lg text-gray-600 mb-2'>
          Next.js is a React framework that enables you to build static and server-rendered applications. It offers many features that make it easy to create high-performance web apps.
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>🚀 Fast performance with server-side rendering.</li>
          <li>📦 Automatic code splitting for faster page loads.</li>
          <li>🔍 Built-in SEO optimization.</li>
          <li>⚡️ Easy to deploy on Vercel and other platforms.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-4xl font-semibold text-gray-800 mb-4'>Features</h2>
        <p className='text-lg text-gray-600 mb-2'>
          Next.js comes with several features that enhance the development experience:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>🧩 API Routes: Create API endpoints directly in your Next.js app.</li>
          <li>📄 Dynamic Routing: Build complex routing logic with ease.</li>
          <li>🌐 Internationalization: Build multilingual applications easily.</li>
          <li>🔒 Authentication: Secure your application with built-in features.</li>
        </ul>
      </section>

      <section className='mb-8'>
        <h2 className='text-4xl font-semibold text-gray-800 mb-4'>Getting Started</h2>
        <p className='text-lg text-gray-600 mb-2'>
          To get started with Next.js, follow these steps:
        </p>
        <ol className='list-decimal list-inside mb-4'>
          <li>💻 Install Node.js and npm.</li>
          <li>🛠️ Create a new Next.js app with `npx create-next-app`.</li>
          <li>🚀 Start your development server with `npm run dev`.</li>
          <li>📖 Explore the documentation at <Link href='https://nextjs.org/docs' className='text-teal-500 underline'>nextjs.org/docs</Link>.</li>
        </ol>
      </section>

      <section>
        <h2 className='text-4xl font-semibold text-gray-800 mb-4'>Join the Community</h2>
        <p className='text-lg text-gray-600 mb-2'>
          Connect with fellow developers and stay updated with the latest news:
        </p>
        <ul className='list-disc list-inside mb-4'>
          <li>💬 Join the Next.js Discord community.</li>
          <li>📝 Follow Next.js on <Link href='https://twitter.com/nextjs' className='text-teal-500 underline'>Twitter</Link>.</li>
          <li>📚 Read articles and tutorials on the Next.js blog.</li>
        </ul>
      </section>
    </div>
  )
}

export default Home
