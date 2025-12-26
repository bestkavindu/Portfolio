import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className='bg-surface border-t border-border py-8'>
      <div className='container mx-auto px-4 flex flex-col md:flex-row items-center justify-between'>
        <div className='mb-4 md:mb-0'>
          <span className='text-xl font-bold tracking-tight'>Sachin<span className='text-accent'>.</span></span>
          <p className='text-sm text-text-muted mt-1'>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className='flex space-x-6'>
          <a href="https://www.facebook.com/bestkavindu" target='_blank' rel="noopener noreferrer" className='text-text-muted hover:text-accent transition-colors text-xl'>
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/sachin-kavindu-b8814a18a/" target='_blank' rel="noopener noreferrer" className='text-text-muted hover:text-accent transition-colors text-xl'>
            <FaLinkedin />
          </a>
          <a href="https://github.com/bestkavindu" target='_blank' rel="noopener noreferrer" className='text-text-muted hover:text-accent transition-colors text-xl'>
            <FaGithub />
          </a>
          <a href="mailto:bestkavindu@gmail.com" className='text-text-muted hover:text-accent transition-colors text-xl'>
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
