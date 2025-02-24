import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Contact = () => {
  return (
    <>

    <div className="min-h-screen flex flex-col">
    <Navbar/>
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center bg-gray-100 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black">Get in Touch</h2>
          <p className="mt-2 text-black">
            I'm always open to new opportunities and collaboration. Feel free to
            reach out!
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            {/* Replace with actual social media links/icons */}
            <a href="https://www.facebook.com/bestkavindu" target='_blank' className="text-5xl">
            <FaFacebook className=' text-black hover:text-red-700'/>
            </a>
            <a href="https://www.linkedin.com/in/sachin-kavindu-b8814a18a/" target='_blank' className="text-5xl">
              <FaLinkedin className='text-black hover:text-red-700' />
            </a>
            <a href="https://github.com/bestkavindu" target='_blank' className="text-5xl">
            <FaGithub className='text-black hover:text-red-700 '/>
            </a>
            <a href="mailto:bestkavindu@gmail.com" className="text-5xl">
            <MdEmail className='text-black hover:text-red-700'/>
            </a>
          </div>
        </div>
      </div>
    
    <Footer/>
  </div>

    </>
  )
}

export default Contact
