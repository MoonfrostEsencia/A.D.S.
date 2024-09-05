"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl text-center pl-2 mx-auto text-m md:text-2xl font-bold text-neutral-800 dark:text-neutral-200 ">
      From efficient bike rides 🚲 to affordable package delivery 📦, and reliable freight services 🚚, we provide a wide range of solutions to meet every requirement in Karsog. Explore our all-in-one service offerings designed to make your life easier and more convenient.
</h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7]  p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Our delivery charges are nominal and significantly lower compared to auto and taxi services. We believe in providing cost-effective solutions without compromising on quality and efficiency.
              
            </p>
            <Image
              src="/1.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const D2 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7]  p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <strong> Enjoy swift and comfortable bike rides to key locations including:</strong>
              <br/>
              
           Churag,Kelodhar,Kunhoo,Kao and Bhakhrot.
              <br/> <br/>
              And many more!
              </p>
              <Image
                src="/1.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
  const D3 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7]  p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
                
                In addition to transportation, Abhilo also offers reliable labour services to meet your needs. Whether it's moving heavy items or any other labour-intensive task, our team is ready to assist you.
              </p>
              <Image
                src="/3.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
  const D4 = () => {
    return (
      <>
        {[...new Array(1).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7]  p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600  text-base md:text-2xl font-sans max-w-3xl mx-auto">
              What are you waiting for? Call us now at <strong>94590-60016</strong> and experience the best transportation and delivery services in Karsog, Himachal Pradesh.
              </p>
              <Image
                src="/4.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };

const data = [
  {
    category: "🚗 Delivery",
    title: "🚗 Affordable Delivery Services",
    src: "/1.png",
    content: <DummyContent />,
  },
  {
    category: "🚲 Rides",
    title: "🚲 Rides to Main Stations",
    src: "/2.png",
    content: <D2 />,
  },
  {
    category: " 🛠️ Labour",
    title: "🛠️ Labour Services Available",
    src :"/3.png",
    content: <D3 />,
  },

  {
    category: "📞 Contact",
    title: "📞 Call Now and Avail Our Services",
    src: "/4.png",
    content: <D4 />,
  },
 
];