import React from 'react'
import hero from '../assets/Hero.png'
import Pdf from '../assets/Kavindu Rajapaksha.pdf'
import { ArrowRight, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section className='relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10'>
      <div className='container mx-auto px-4 md:px-6 z-10'>
        <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>
          
          <div className='lg:w-1/2 flex flex-col space-y-6 text-center lg:text-left animate-slide-up'>
            <div className='space-y-4'>
               <span className='inline-block px-3 py-1 bg-accent/10 text-accent font-medium rounded-full text-sm tracking-wide'>
                  Software Engineer & Data Analyst
               </span>
              <h1 className='text-5xl lg:text-7xl font-bold tracking-tight leading-1'>
                Hi, I'm <br />
                <span className='text-accent'>Sachin Kavindu</span>
              </h1>
              <p className='text-lg lg:text-xl text-text-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed max-w-[600px]'>
                I transform data into insights and build scalable software solutions. 
                Creating impact through code and analytics.
              </p>
            </div>
            
            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4'>
              <a 
                href={Pdf} 
                download 
                target='_blank' 
                className='flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20'
              >
                <Download size={20} />
                Download CV
              </a>
              <a 
                href="#projects" 
                className='flex items-center gap-2 bg-white border border-border text-text-main px-8 py-3 rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105'
              >
                View Work
                <ArrowRight size={20} />
              </a>
            </div>
            
            <div className='pt-8 flex items-center justify-center lg:justify-start gap-8 text-text-muted'>
                <div>
                    <h3 className='text-3xl font-bold text-accent'>3+</h3>
                    <p className='text-sm'>Years Experience</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold text-accent'>20+</h3>
                    <p className='text-sm'>Projects Done</p>
                </div>
            </div>
          </div>

          <div className='lg:w-1/2 relative flex justify-center lg:justify-end animate-fade-in'>
            <div className='relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]'>
                <div className='absolute inset-0 bg-accent/20 rounded-full blur-3xl opacity-30 animate-pulse'></div>
                <img 
                    src={hero} 
                    alt="Sachin Kavindu" 
                    className='relative w-full h-full object-cover rounded-3xl z-10 drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500' 
                />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
