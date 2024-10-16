"use client";
import React from "react";
import { Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { SiMinutemailer } from "react-icons/si";

export function TailwindcssButtons() {
  return (
    <div className="pb-32 px-4 w-full ">
      <Toaster position="top-center" />
      <div className="flex justify-center items-center w-full max-w-7xl mx-auto gap-10">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
export const buttons = [
  {
    name: "Lit up borders",
    description: "Gradient button with perfect corners",
    component: (
      <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2 flex justify-center items-center gap-5 bg-slate-950 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            Let's Get in Touch
            <SiMinutemailer className="m-1"/>
        </div>
      </button>
    ),
  },
];
