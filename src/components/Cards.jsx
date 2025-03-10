import React from 'react'
import Github from '../assets/Github.png'

const Cards = ({ item }) => {
    return (
        <div className='border bg-white rounded-2xl w-[350px] lg:w-[400px]'>
            <img src={item.image} alt="" className='rounded-xl p-5' />
            <div className='p-4'>
                <h1 className='font-semibold text-xl mb-2'>{item.title}</h1>
                <p>{item.desc}</p>
                <div className='flex gap-3 mt-4'>
                    <button className='item-center bg-black text-white px-3 py-2 rounded-md'>
                        <a href={item.github} target='_blank' className='flex gap-1'>
                            <img src={Github} alt="" className='w-6'/>
                            Github Link
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cards

