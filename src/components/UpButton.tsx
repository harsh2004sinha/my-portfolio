'use client'

import { div } from 'framer-motion/client';
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";

function UpButton() {

    const [visible, setVisible] = useState(false);

    const togglevisibility = () => {
        if (window.scrollY > 300) setVisible(true);
        else setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', togglevisibility);
        return () => {
            window.removeEventListener('scroll', togglevisibility);
        }
    }, [])


    return (
        <div>
            {visible && (
                <div onClick={scrollToTop} className='fixed bottom-8 right-8 rounded-full h-10 w-8 bg-red-500 flex items-center justify-center hover:cursor-pointer'>
                    <FaArrowUp className='text-white' />
                </div>
            )}
        </div>
    )
}

export default UpButton