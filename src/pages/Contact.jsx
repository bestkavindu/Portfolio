import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-background py-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h2 className="text-accent font-medium tracking-wide uppercase text-sm mb-2">Contact</h2>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-xl text-text-muted mb-12 leading-relaxed">
            I'm always open to new opportunities and collaboration. 
            Feel free to reach out to me via email or social media!
          </p>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="https://www.facebook.com/bestkavindu" target='_blank' rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-sm border border-gray-100 text-3xl text-primary hover:text-accent hover:shadow-md transition-all hover:-translate-y-1">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/sachin-kavindu-b8814a18a/" target='_blank' rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-sm border border-gray-100 text-3xl text-primary hover:text-accent hover:shadow-md transition-all hover:-translate-y-1">
              <FaLinkedin />
            </a>
            <a href="https://github.com/bestkavindu" target='_blank' rel="noopener noreferrer" className="p-4 bg-white rounded-full shadow-sm border border-gray-100 text-3xl text-primary hover:text-accent hover:shadow-md transition-all hover:-translate-y-1">
              <FaGithub />
            </a>
            <a href="mailto:bestkavindu@gmail.com" className="p-4 bg-white rounded-full shadow-sm border border-gray-100 text-3xl text-primary hover:text-accent hover:shadow-md transition-all hover:-translate-y-1">
              <MdEmail />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Contact
