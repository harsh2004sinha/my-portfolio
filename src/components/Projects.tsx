'use client'

import React from 'react'
import { ThreeDCardDemo } from './ThreeDCard'

function Projects() {
    return (
        <section id='projects' className='flex flex-col items-center justify-center text-slate-100 p-32 font-sans'>
            <p className='text-5xl font-bold'>
                My <span className='text-red-500'>Projects</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <ThreeDCardDemo />
                <ThreeDCardDemo />
                <ThreeDCardDemo />
            </div>
        </section>
    )
}

export default Projects