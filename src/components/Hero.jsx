import React from 'react'
import hero from '../assets/Hero.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Pdf from '../assets/Kavindu Rajapaksha.pdf'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-6xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm Sachin <span className='text-red-500'>Kavindu</span></h1>
            <p className='md:text-2xl text-xl mb-4'>Data Enthusiast, Data Analyst / Software Engineer</p>
            <p className='mb-4'> Experienced Data Analytics with a strong background in
              Software Engineering. Skilled in designing and develop
              ing efficient solutions, leveraging programming
              languages and analytical tools to drive data-driven
              insights. Proven ability to solve complex problems and
              deliver high-quality software solutions in fast-paced
              environments</p>
            <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href={Pdf} download target='_blank'>Download CV</a></button>
          </div>
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <img src={hero} alt="" className='lg:h-[90vh] h-96' />

          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero
