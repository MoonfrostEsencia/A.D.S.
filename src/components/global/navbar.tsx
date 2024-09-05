import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className=" right-0 left-0 top-0 py-4 px-4 bg-black backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-[#91a3b0] justify-between">
    <aside className="flex items-center gap-[2px] ">
       
      <Link href="/">
     
      <h6 className="font-semibold text-white text-[30px] italic"><span >A.D.S.</span></h6>
      </Link>
      
    </aside>
    <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block bg-gradient-to-r from-neutral-300 to-neutral-300 bg-clip-text text-transparent">
      
    </nav>
    <aside className="flex items-center gap-4">
      <a href='tel:+9459060016'>
      <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-white text-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
  Get Started
</button>
</a>


      <div className="flex items-center justify-center flex-col gap-4">
        
        
       
      </div>
        {/* --- <MobileMenu />-------INFINITE CARD MOVE-- */}
  
    </aside>
  </header>
  )
}
export default Navbar
