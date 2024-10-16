"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
export function Navbar() {
  const navItems = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Projects",
      link: "/about",
    },
    {
      name: "Achievements",
      link: "/contact",
    },
    {
      name: "Contact",
      link: "/about",
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
