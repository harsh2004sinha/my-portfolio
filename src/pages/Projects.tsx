'use client'

import React from 'react'
import { ThreeDCardDemo } from '../components/ThreeDCard'
import blogging from '@/images/BlogApp.png'
import crypto from '@/images/CryptoApp.png'
import portfolio from '@/images/MyPortfolio.png'
import { ShootingStars } from '@/components/ui/shooting-stars'
import { StarsBackground } from '@/components/ui/stars-background'

function Projects() {
    return (
        <section id='projects' className='flex flex-col items-center justify-center text-slate-100 p-32 font-sans'>
            <p className='text-5xl font-bold'>
                My <span className='text-red-500'>Projects</span>
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <ThreeDCardDemo
                    source={blogging.src}
                    title='Blogging Application'
                    github='https://github.com/harsh2004sinha/myBlogApp'
                    content='Developed a comprehensive blogging application with CRUD operations allowing users to post, edit, upload
images and delete blogs with rich text formatting options (bold, italic, colored text).'
                />
                <ThreeDCardDemo
                    source={crypto.src}
                    title='Crypto-Portfolio App'
                    github='https://github.com/harsh2004sinha/crypto-portfolio-app'
                    content='Created a responsive crypto portfolio website utilizing Next.js, Tailwind CSS, & TypeScript.'
                />
                <ThreeDCardDemo
                    source={portfolio.src}
                    title='My Portfolio'
                    github='https://github.com/harsh2004sinha/my-portfolio'
                    content='Created a stunning responsive portfolio website of myself utilizing Next.js, Tailwind CSS, and TypeScript'
                />
            </div>
            <ShootingStars />
            <StarsBackground />
        </section>
    )
}

export default Projects