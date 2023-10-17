"use client" 
import Link from 'next/link'
import { useState } from 'react';

const SideMenu = ({ active }) => { // Receive the `active` prop as an argument
  const [activeLink, setActiveLink] = useState(active); // Set the default active link

 

  return (
    <div className="lg:w-80 bg-black min-h-screen flex flex-col justify-start text-white">
      <div className="m-2 p-5 text-blue-600 font-extrabold">InterviewGPT</div>
      <div>
        <ul>
          <li
            className={`px-20 py-4 ${
              activeLink === 'home' ? 'bg-blue-600' : 'hover:bg-blue-700'
            } mx-auto font-extrabold`}
          >
            <Link href="/" passHref>
              <div>HOME</div>
            </Link>
          </li>
          <li
            className={`px-20 py-4 ${
              activeLink === 'profile' ? 'bg-blue-600' : 'hover:bg-blue-700'
            } font-extrabold`}
          >
            <Link href="/profile" passHref>
              <div >PROFILE</div>
            </Link>
          </li>
          <li
            className={`px-20 py-4 ${
              activeLink === 'interview' ? 'bg-blue-600' : 'hover:bg-blue-700'
            } font-extrabold`}
          >
            <Link href="/interview" passHref>
              <div >INTERVIEW</div>
            </Link>
          </li>
          <li
            className={`px-20 py-4 ${
              activeLink === 'about' ? 'bg-blue-600' : 'hover:bg-blue-700'
            } font-extrabold`}
          >
            <Link href="/about" passHref>
              <div >ABOUT US</div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideMenu;
