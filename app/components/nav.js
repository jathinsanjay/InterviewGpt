"use client" 
import Image from 'next/image'
import logo from './imgs/gpt.png'
import { useState } from 'react'
import { CiLogout } from "react-icons/ci";


const SideMenu = ({ active }) => { // Receive the `active` prop as an argument
  const [activeLink, setActiveLink] = useState(active); // Set the default active link
const logout=()=>{
  localStorage.removeItem("registrationno");
  window.location.href="/"
}
 

  return (
    
    <div className='w-[100%] '> 
        <div className='flex justify-between w-[100%] '>
        <div className="p-2  text-center flex w-auto my-auto">
          <div className='w-[40%] my-auto p-1 m-2' >
            <Image
              src={logo}
              width={60}
              height={60}
              alt="logo"
            />

          </div>
          <h1 className='text-4xl py-4 font-bold text-white'>InterviewGPT</h1>
        </div>
        <div className='w-[40%]  flex text-white my-auto'>
          <div className={`m-4 text-xl font-bold ${
              activeLink === 'home' ? 'bg-black rounded-lg p-1' : ' p-1 rounded-lg hover:bg-black'
            }`}  ><a href='/home'>Home</a></div>
            <div className={`m-4 text-xl font-bold ${
              activeLink === 'Profile' ? 'bg-black rounded-lg p-1' : ' p-1 rounded-lg hover:bg-black'
            }`}  ><a href='/profile'>Profile</a></div>
          <div className={`m-4 text-xl font-bold ${
              activeLink === 'topics' ?'bg-black rounded-lg p-1' : ' p-1 rounded-lg hover:bg-black'
            }`} ><a href='/topics'>Topics</a></div>
          <div className={`m-4 text-xl font-bold ${
              activeLink === 'interview' ? 'bg-black rounded-lg p-1' : ' p-1 rounded-lg hover:bg-black'
            }`}><a href='/instructions'>Interview</a></div>
          <div className={`m-4 text-xl font-bold ${
              activeLink === 'contact' ?'bg-black rounded-lg p-1' : ' p-1 rounded-lg hover:bg-black'
            }`}><a href='/contact'>Contact Us</a></div>


        </div>
        <div className='text-xl text-white p-10 font-bold flex mx-10' onClick={logout}><div className='w-[30px] p-1 m-auto'><CiLogout/></div>Logout</div>
        
        </div>
       
   
         

        </div>
  );
};

export default SideMenu;
