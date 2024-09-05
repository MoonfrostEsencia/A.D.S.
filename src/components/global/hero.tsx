"use client";
import React from "react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden mb-12">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white mb-12">
            Welcome to Your  <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
              Trusted Partner in Karsog, Himachal Pradesh
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/h.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
