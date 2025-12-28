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
    
    window.addEventListener('scroll', handleScroll, { passive: true })
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
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent ${scrolled ? 'bg-white/80 backdrop-blur-xl border-white/20 shadow-sm' : 'bg-transparent'}`}>
       <div className='container mx-auto px-4 md:px-6 h-20 flex items-center justify-between'>
        
        <Link to="/" className='flex items-center gap-1 group'>
          <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-xl mr-2 group-hover:rotate-6 transition-transform">
            S
          </div>
          <span className='text-xl font-bold tracking-tight text-primary'>Sachin<span className='text-accent'>.</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-all duration-200 relative group py-2 ${isActive(link.path) ? 'text-accent' : 'text-text-muted hover:text-primary'}`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
            </Link>
          ))}
        </nav>

        <div className='hidden md:flex items-center gap-4'>
            <Link to="/contact" className='px-6 py-2.5 bg-primary text-white text-sm font-medium rounded-full shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:-translate-y-0.5 active:scale-95'>
                Hire Me
            </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className='md:hidden p-2 text-text-main hover:bg-gray-100 rounded-lg transition-colors' 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className='absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden animate-fade-in'>
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {navLinks.map((link) => (
                <Link 
                    key={link.name} 
                    to={link.path} 
                    className={`flex items-center justify-between p-4 rounded-xl transition-colors ${isActive(link.path) ? 'bg-accent/5 text-accent font-medium' : 'text-text-main hover:bg-gray-50'}`}
                    onClick={() => setMobileMenuOpen(false)}
                >
                    {link.name}
                    {isActive(link.path) && <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>}
                </Link>
                ))}
                <div className="h-px bg-gray-100 my-2"></div>
                <Link 
                    to="/contact" 
                    className='w-full text-center py-3.5 bg-primary text-white rounded-xl font-medium shadow-lg shadow-primary/20 active:scale-95 transition-transform'
                    onClick={() => setMobileMenuOpen(false)}
                >
                    Hire Me
                </Link>
            </div>
        </div>
      )}
    </header>
  )
}



export default Navbar
