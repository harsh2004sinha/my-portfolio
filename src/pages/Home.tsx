"use client";
import Image from "next/image";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import pic from "@/images/Image.jpeg";
import { MovingBorderDemo } from "../components/MovingBorder";

const w1 = `Hi! I'm Harsh Sinha, a Full Stack Web Developer...`;
const w2 = `Mastering Competitive Algorithms and Web Development`;

function About() {
  return (
    <section className="p-10 flex justify-center">
      <div className="p-10 pl-40 pt-32">
        <TextGenerateEffect words={w1} textColor="text-white" size="text-5xl" />
        <TextGenerateEffect words={w2} textColor="text-white" size="text-2xl" />
        <MovingBorderDemo/>
      </div>
      <div className="p-8 pt-20 pr-20">
        <Image className="rounded-full border-white w-80 h-80 mt-6 ml-6 mr-32" src={pic} alt="Harsh Sinha" />
      </div>
    </section>
  )
}

export default About
