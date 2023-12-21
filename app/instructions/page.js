"use client"
import React from 'react';
import Instructions from '../components/instructions';
import Nav from '../components/nav';
import toast, { Toaster } from 'react-hot-toast';

const InstructionsPage = () => {
  return (
    <main className="bg-gradient-to-br  from-10% from-black  via-30% via-[#6C71F09B] via-30% via-blue-500  via to-pink-500 w-[100%] h-[100vh]">
      <div className="flex flex-col">
        <Nav active='interview' />
        <main className='w-[100%] flex'>
   
    <div>
     
      <Instructions />
    </div>
    </main>
    </div>
    </main>
  );
};

export default InstructionsPage;
