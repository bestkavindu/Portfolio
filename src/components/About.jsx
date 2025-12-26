import React from 'react'
import Html from '../assets/Html.png'
import Css from '../assets/CSS.png'
import Javascript from '../assets/JS.png'
import ReactLogo from '../assets/React.png'
import Tailwind from '../assets/Tailwind Css.png'
import Bootstrap from '../assets/Bootstrap.png'
import NodeLogo from '../assets/NodeLogo.png'
import Mongodb from '../assets/mongodb.svg'
import Python from '../assets/Python-Logo.png'
import PowerBI from '../assets/PowerBI.png'
import SQL from '../assets/sql.png'

const SkillBadge = ({ img, name }) => (
    <div className='flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 w-24 h-24 gap-2'>
        <img src={img} alt={name} className='w-8 h-8 object-contain' />
        <span className='text-xs font-semibold text-gray-700 text-center'>{name}</span>
    </div>
)

const AboutComponent = () => {
    return (
        <section className='relative py-24 bg-gray-50' id='about'>
            <div className='container mx-auto px-4 md:px-6'>
                <div className='text-center mb-16'>
                    <h2 className='text-accent font-medium tracking-wide uppercase text-sm mb-2'>About Me</h2>
                    <h3 className='text-3xl md:text-4xl font-bold text-primary'>My Journey & Expertise</h3>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
                    <div className='space-y-8'>
                        <div className='bg-white p-8 rounded-2xl shadow-sm border border-gray-100'>
                            <h4 className='text-2xl font-bold mb-4 text-primary'>Who I Am</h4>
                            <p className='text-text-muted leading-relaxed mb-6'>
                                I started my career as an Associate Software Engineer, where I built intuitive and scalable web applications using Laravel and React. 
                                After a year, I transitioned to Clindata Pvt as a Junior Associate Statistical Programmer, focusing on data validation, cleaning, 
                                and preprocessing.
                            </p>
                            <p className='text-text-muted leading-relaxed'>
                                Combining my expertise in web development and statistical programming, I deliver data-driven solutions with precision and efficiency.
                                I'm passionate about exploring new technologies and turning ideas into reality.
                            </p>
                        </div>
                    </div>

                    <div className='w-full'>
                        <h4 className='text-2xl font-bold mb-6 text-primary'>Technical Skills</h4>
                        <div className='flex flex-wrap gap-4'>
                            <SkillBadge img={Python} name="Python" />
                            <SkillBadge img={PowerBI} name="Power BI" />
                            <SkillBadge img={SQL} name="SQL" />
                            <SkillBadge img={ReactLogo} name="React" />
                            <SkillBadge img={NodeLogo} name="Node.js" />
                            <SkillBadge img={Mongodb} name="MongoDB" />
                            <SkillBadge img={Tailwind} name="Tailwind" />
                            <SkillBadge img={Javascript} name="JS" />
                            <SkillBadge img={Html} name="HTML" />
                            <SkillBadge img={Css} name="CSS" />
                            <SkillBadge img={Bootstrap} name="Bootstrap" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutComponent
