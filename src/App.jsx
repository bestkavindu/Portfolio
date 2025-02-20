import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Particle from './components/Particle'
import About from './pages/About'
import Projects from './components/Project'
import Contact from './pages/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Particle/>
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <Footer/>
    </>
  )
}

export default App
