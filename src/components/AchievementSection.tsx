'use client'

import React from 'react'
import { Cards } from './Cards'
import Image from 'next/image'
import Codeforces from '@/images/code-forces.svg'
import Leetcode from '@/images/leetcode.svg'
import AtCoder from '@/images/atcoder.svg'
import gfg from '@/images/icons8-geeksforgeeks.svg'
import Link from 'next/link'

function AchievementSection() {
    return (
        <section id='achievement' className='flex flex-col items-center justify-center text-slate-100 pb-32 pr-32 pl-32 font-sans'>
            <p className='text-5xl font-bold'>
                My <span className='text-red-500'>Achievements</span> and <span className='text-red-500'>Coding Profiles</span>
            </p>
            <Cards />
            <div className='flex justify-center items-center w-full'>
                <Link className='flex justify-center items-center' href={'https://codeforces.com/profile/kv_harsh_sinha'}>
                <Image src={Codeforces} alt='Codeforces' width={40} height={40}></Image>
                <p className='text-3xl mr-16 ml-2'>Codeforces
                </p>
                </Link>
                <Link className='flex justify-center items-center' href={'https://www.codechef.com/users/harsh2004'}>
                <Image className='mr-16' src={'https://cdn.codechef.com/images/cc-logo.svg'} alt='Leetcode' width={200} height={40}></Image>
                </Link>
                <Link className='flex justify-center items-center' href={'https://leetcode.com/u/harsh2004sinha/'}>
                <Image src={Leetcode} alt='Leetcode' width={40} height={40}></Image>
                <p className='text-3xl mr-16 ml-2'>   Leetcode
                </p>
                </Link>
                <Link className='flex justify-center items-center' href={'https://atcoder.jp/users/harsh_2004sinha'}>
                <Image src={AtCoder} alt='AtCoder' width={40} height={40}></Image>
                <p className='text-3xl mr-16 ml-2'>   AtCoder
                </p>
                </Link>
                <Link className='flex justify-center items-center' href={'https://www.geeksforgeeks.org/user/harsh2001flb/'}>
                <Image src={gfg} alt='gfg' width={40} height={40}></Image>
                <p className='text-3xl mr-16 ml-2'>  geeksforgeeks
                </p>
                </Link>
            </div>
        </section>
    )
}

export default AchievementSection