
import "./globals.css";

import Footer from "@/components/global/Footer";

import Navbar from "@/components/global/navbar";
import { TextGenerateEffect } from "@/components/global/text-generate";  

import { SparklesPreview } from "@/components/global/middle";
import {AppleCardsCarouselDemo} from '@/components/global/card'
import {HeroScrollDemo} from '@/components/global/hero'
import {About1} from '@/components/global/about'
import React from 'react'


import { Button } from "@/components/ui/button";
import { products, textwords } from "@/lib/constants";

import { CheckIcon, Section } from "lucide-react";
import Image from "next/image";                                   
import Link from "next/link"; 








export default function Home() {
  return (
    <main >
    



     
      <Navbar />

   
    <section className="h-full w-full -md relative flex flex-col items-center antialiased m-0 p-0 overflow-hidden">
    <HeroScrollDemo></HeroScrollDemo>
    
</section>
<About1/>

    
       
         <section>
         
    
    
         <SparklesPreview></SparklesPreview>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>

  
      </section>
      
      <section>
        

      
      </section>


      <section className=" ">
      
      </section>







    <section >
        <div className=" mt-[-100px] items-center px-4 ">

          <div className=" h-[20rem]  flex justify-center  items-center px-4 ">
            <div className="mx-auto  font-normal mt-[-40px]  ">
              <TextGenerateEffect words={textwords} />
            </div>
          </div>
        </div>


        <div className="flex items-center p-4 mt-[-140px] flex-col gap-7  ">
        <Button
                  
                  
                  className="p-6 mb-8 md:mb-0 text-xl  sm:w-fit border-t-2 -full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-white  md:text-center font-sans group-hover:text-black">
             
                  <Link href='tel:+9459060016'>📞Call Now</Link>
                  </span>
                </Button>
               
                <Button
                  
                  
                  className="p-6 mb-8 md:mb-0 text-xl  sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-white  md:text-center font-sans group-hover:text-black">
                 
                  <Link href="/featured">EXPLORE MORE</Link>
                  </span>
                </Button>


        </div>


      </section>




    









    </main>
  );
}
