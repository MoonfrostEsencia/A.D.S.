
import { CardBody, CardContainer, CardItem } from '@/components/global/3d-card';
import { Button } from '@/components/ui/button';
import Footer from "@/components/global/Footer";
import { TextGenerateEffect } from "@/components/global/text-generate";  
import Image from "next/image";
import Link from 'next/link';
import React from 'react'

import { textwords } from '@/lib/constants';




const FeaturedPage = () => {
  return (

   
  <>   <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[150px] flex-col mx-auto px-2">

  
  
        <div>
  
        </div>
      <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 ">

        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600"
            >
              📦 Packages
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >
              Need to send a package across town? Abhilo's package delivery service ensures your items reach their destination safely and promptly. Whether it’s a small parcel or a large shipment, we've got you covered.


            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/p1.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>

          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              🚚 Freight
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >

For businesses and individuals requiring reliable transport for larger items, our freight service is the ideal solution. Our fleet is equipped to handle substantial loads, making it easier for you to move goods across distances without hassle.


            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/p2.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="32" />
            </CardItem>

          </CardBody>
        </CardContainer>






        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              🛒 Groceries
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >

Save time and effort with our grocery and essentials delivery service. Simply place your order, and we'll bring your daily necessities right to your doorstep. Perfect for those days when stepping out is not an option.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/p3.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="21" />
            </CardItem>

          </CardBody>
        </CardContainer>



        <CardContainer className="inter-var">
          <CardBody className="bg-gray-50 relative group/card   border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 "
            >
              📜 Documents
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 "
            >
              Important documents need to be delivered urgently? Our document courier service ensures your papers are delivered securely and on time. We prioritize your privacy and the safety of your important documents.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/p4.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail" />
            </CardItem>

          </CardBody>
        </CardContainer>


      </div>


    </div><div className=" mt-[-100px] items-center px-4">

        <div className=" h-[20rem]  flex justify-center  items-center px-4">
          <div className="mx-auto text-4xl font-normal mt-[-40px] text-neutral-600 ">

          </div>
        </div>














       




        <div className="flex items-center p-4 mt-[-140px] flex-col">
        <div className="max-w-6xl flex text-xl text-sm font-sans items-center  mt-[10px] flex-col mx-auto px-2">

<h2 className="text-4xl md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-white mb-8 to-neutral-600 font-sans font-bold">
                </h2>
</div>

        </div>
      </div><div className="flex items-center p-4 mt-[-140px] flex-col">
      <Button
                  
                  
                  className="p-6 mb-8 md:mb-0 text-xl  sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-white  md:text-center font-sans group-hover:text-black">
                 
                  <Link href="/">🏠</Link>
                  </span>
                </Button>

      </div></>  


  )
}

export default FeaturedPage
