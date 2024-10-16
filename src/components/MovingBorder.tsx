"use client";
import React from "react";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export function MovingBorderDemo() {
  return (
    <div className="mt-10">
      <Button
        borderRadius="1.75rem"  
        className="bg-transparent dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-100"
      >
        <Link href={"#"}>My Resume</Link>
      </Button>
    </div>
  );
}
