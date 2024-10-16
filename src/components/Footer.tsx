'use client'

import React from 'react';
import { TailwindcssButtons } from './CSSButton';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
    return (
        <div className='flex flex-col items-center justify-center text-slate-100 p-32 font-sans'>
            <p className='text-5xl text-center font-bold'>
                Interested in <span className='text-red-500'>collaborating</span> <br /> or have a project in mind?
            </p>
            <p className='mt-5 text-xl text-slate-400'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <TailwindcssButtons />
            <div className='flex justify-between items-center w-full'>
                <p className='text-slate-100'>Copyright @ 2024 Harsh</p>
                <div className='flex text-3xl space-x-4 text-slate-100 hover:cursor-pointer'>
                    <FaGithub />
                    <FaLinkedin />
                    <IoMdMail />
                </div>
            </div>

        </div>
    );
}

export default Footer;
