import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Review', path: '/review' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-auto transition-all duration-300 ${scrolled ? 'top-2' : 'top-5'}`}>
       <div className={`bg-white/80 backdrop-blur-md border border-white/20 shadow-lg rounded-full px-6 py-3 flex items-center justify-between md:justify-center md:gap-8 transition-all duration-300 ${scrolled ? 'shadow-xl' : 'shadow-lg'}`}>
        
        {/* <Link to="/" className='flex items-center gap-1 group md:absolute md:left-8'>
          <span className='text-xl font-bold tracking-tighter'>Sachin<span className='text-accent'>.</span></span>
        </Link> */}

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-1 bg-surface/50 p-1 rounded-full'>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:text-accent ${isActive(link.path) ? 'bg-white shadow-sm text-accent' : 'text-text-muted hover:bg-white/50'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex items-center md:absolute md:right-8'>
            <Link to="/contact" className='px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5'>
                Hire Me
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className='md:hidden p-2 text-text-main hover:bg-gray-100 rounded-full transition-colors' 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 w-full mt-2 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4 flex flex-col gap-2 md:hidden animate-fade-in origin-top'>
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${isActive(link.path) ? 'bg-accent/10 text-accent font-medium' : 'text-text-main hover:bg-gray-50'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
                {isActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>}
              </Link>
            ))}
            <Link 
                to="/contact" 
                className='mt-2 w-full text-center py-3 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 active:scale-95 transition-transform'
                onClick={() => setMobileMenuOpen(false)}
            >
                Hire Me
            </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar
