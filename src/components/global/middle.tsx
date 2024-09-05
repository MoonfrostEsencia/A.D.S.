"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full  flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.9}
          maxSize={1.9}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-9xl text-6xl lg:text-9xl font-bold text-center text-white relative z-20">
      Quick, Reliable, Affordable <br/>– Anytime, Anywhere
      </h1>
    </div>
  );
}
