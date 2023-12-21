"use client"
import SideNavBar from '../components/nav';
import { FaArrowCircleRight } from "react-icons/fa";
import Image from 'next/image';
import homeimg from '../components/imgs/home.png';



export default function Home() {
  return (
    <main className="bg-gradient-to-br  from-10% from-black  via-30% via-[#6C71F09B] via-30% via-blue-500  via to-pink-500 w-[100%] h-[100vh]">
      <div className="flex flex-col">
        <SideNavBar active='home' />
        <main className='w-[100%] flex'>
          <div className='w-[50%] h-[100%] p-10 m-10 '>
            <h1 className='text-6xl font-black text-white'>Simplify your 
                Interview Process
               with us.
</h1>
<div className='text-white my-4 text-lg'>Our streamlined interview process simplifies  hiring.  Say goodbye to complexities
   and  lengthy procedures. Save time and resources by entrusting us with your hiring needs</div>
   <button className='flex text-2xl bg-black p-4 font-bold text-white'>Learn More <div className='p-1 m-x1'><FaArrowCircleRight /></div></button>
          </div>
          <div className='w-[50%] h-[100%] p-2 '>
            <Image src={homeimg} alt="home" 
            width={1000}
            height={400}
            />
          </div>
       
   
   

        </main>
      </div>
    </main>
  );
}




