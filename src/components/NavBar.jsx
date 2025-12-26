import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Review', path: '/review' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className='sticky top-0 z-50 w-full glass'>
      <div className='container mx-auto px-4 md:px-6 h-16 flex items-center justify-between'>
        <Link to="/" className='flex items-center gap-1 group'>
          <span className='text-2xl font-bold tracking-tighter'>Sachin<span className='text-accent'>.</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors hover:text-accent ${isActive(link.path) ? 'text-accent' : 'text-text-muted'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className='px-4 py-2 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-colors'>
            Hire Me
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className='md:hidden p-2 text-text-main' 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className='md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border shadow-lg animate-fade-in'>
          <div className='flex flex-col p-4 space-y-4'>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-lg font-medium ${isActive(link.path) ? 'text-accent' : 'text-text-main'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
