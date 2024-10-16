'use client'

import React from 'react';
import { TailwindcssButtons } from './CSSButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from 'next/link';

function Footer() {
    return (
        <div className='flex flex-col items-center justify-center text-slate-100 pb-32 pl-32 pr-32 pt-20 font-sans'>
            <p className='text-5xl text-center font-bold'>
                Interested in <span className='text-red-500'>collaborating</span> <br /> or have a project in mind?
            </p>
            <p className='mt-5 text-xl text-slate-400'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <TailwindcssButtons />
            <div className='flex justify-between items-center w-full'>
                <p className='text-slate-100'>Copyright @ 2024 Harsh</p>
                <div className='flex text-3xl space-x-7 text-slate-100'>
                    <Link href={"https://github.com/harsh2004sinha"} passHref>
                        <span className='hover:cursor-pointer'><FaGithub /></span>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/harsh-sinha-48102b26b/"} passHref>
                        <span className='hover:cursor-pointer'><FaLinkedin /></span>
                    </Link>
                    <Link href={"mailto:harsh2004sinha@gmail.com"} passHref>
                        <span className='hover:cursor-pointer'><IoMdMail /></span>
                    </Link>
                </div>
            </div>

        </div>
    );
}

export default Footer;
