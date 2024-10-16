"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { GlobeDemo } from "./Globe";

export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-16 bg-slate-950">
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-80 bg-pink-700 min-h-[400px] lg:min-h-[250px] p-4"
                className="flex justify-between"
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-white">
                        Adaptive to Global Teams
                    </h2>
                    <p className="mt-2 text-left text-sm md:text-base text-neutral-300">
                        Experienced in working with teams across different time zones, ensuring seamless collaboration and timely project delivery.
                    </p>
                </div>
                <GlobeDemo />
            </WobbleCard>

            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-purple-700 p-4">
                <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-white">
                    Client-Focused Approach
                </h2>
                <p className="mt-2 text-left text-sm md:text-base text-neutral-300">
                    I prioritize client collaboration and am committed to understanding their vision to deliver solutions that meet and exceed expectations.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-indigo-700 p-4">
                <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-white">
                    Problem Solver
                </h2>
                <p className="mt-2 text-left text-sm md:text-base text-neutral-300">
                    Whether it's debugging code or finding creative ways to optimize applications, I thrive on tackling challenges and delivering quality results.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[250px] bg-blue-800 p-4 w-full lg:w-[80%] mx-auto">
                <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-white">
                    Open Communication
                </h2>
                <p className="mt-2 text-left text-sm md:text-base text-neutral-300">
                    Fostering clear, open, and frequent communication to keep all stakeholders aligned throughout the development process.
                </p>
            </WobbleCard>
            <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-teal-700 min-h-[400px] lg:min-h-[250px] p-4"
                className="flex justify-between"
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-base md:text-lg lg:text-2xl font-semibold tracking-tight text-white">
                        Tech Enthusiast
                    </h2>
                    <p className="mt-2 text-left text-sm md:text-base text-neutral-300">
                        Passionate about web development, blockchain, and competitive programming, constantly honing my skills to stay ahead in this ever-evolving field.
                    </p>
                </div>
            </WobbleCard>


        </div>
    );
}
