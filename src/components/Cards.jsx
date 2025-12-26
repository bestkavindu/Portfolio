import React from 'react'
import Github from '../assets/Github.png'
import { Github as GithubIcon, ExternalLink } from 'lucide-react'

const Cards = ({ item }) => {
    return (
        <div className='bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group'>
            <div className='overflow-hidden h-48 w-full relative'>
                <img src={item.image} alt={item.title} className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
                    <a href={item.github} target='_blank' className='p-2 bg-white rounded-full hover:bg-accent hover:text-white transition-colors'>
                        <GithubIcon size={20} />
                    </a>
                </div>
            </div>
            <div className='p-6'>
                <h3 className='font-bold text-xl mb-2 text-primary group-hover:text-accent transition-colors'>{item.title}</h3>
                <p className='text-text-muted text-sm leading-relaxed mb-4 line-clamp-3'>{item.desc}</p>
                <div className='flex gap-3'>
                </div>
            </div>
        </div>
    )
}

export default Cards

