"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { GlobeDemo } from "./Globe";

export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-16 bg-slate-950 font-comic">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-80 bg-pink-700 min-h-[400px] lg:min-h-[250px] p-4"
                className="flex justify-between"
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-slate-950">
                        Adaptive to Global Teams
                    </h2>
                    <p className="mt-2 text-left text-sm md:text-base text-slate-800">
                        Experienced in working with teams across different time zones, ensuring seamless collaboration and timely project delivery.
                    </p>
                </div>
                <GlobeDemo />
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-purple-700 p-4">
                <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-slate-950">
                    Client-Focused Approach
                </h2>
                <p className="mt-2 text-left text-sm md:text-base text-slate-800">
                    I prioritize client collaboration and am committed to understanding their vision to deliver solutions that meet and exceed expectations.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-indigo-700 p-4">
                <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-slate-950">
                    Problem Solver
                </h2>
                <p className="mt-2 text-left text-sm md:text-base text-slate-800">
                    Whether it's debugging code or finding creative ways to optimize applications, I thrive on tackling challenges and delivering quality results.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-teal-700 min-h-[400px] lg:min-h-[250px] p-4">
                <div className="max-w-xs">
                    <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-slate-950">
                        Open Communication
                    </h2>
                    <p className="mt-2 text-left text-sm md:text-base text-slate-800">
                        Fostering clear, open, and frequent communication to keep all stakeholders aligned throughout the development process.
                    </p>
                </div>
                <Image
                    src={'https://plus.unsplash.com/premium_photo-1661767467261-4a4bed92a507?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-blue-800 min-h-[400px] lg:min-h-[250px] p-4"
                className="flex justify-between"
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-slate-950">
                        Tech Enthusiast
                    </h2>
                    <p className="mt-2 text-left text-sm md:text-base text-slate-800">
                        Passionate about web development, blockchain, and competitive programming, constantly honing my skills to stay ahead in this ever-evolving field.
                    </p>
                </div>
                <Image
                    src={'https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>


        </div>
    );
}
