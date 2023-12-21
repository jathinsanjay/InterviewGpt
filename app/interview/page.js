"use client"
import React, { useState } from 'react'
import SideNavBar from '../components/nav';
import Topics from '../components/topics'
import Interview from '../components/instructions'
import toast, { Toaster } from 'react-hot-toast';



  
const interview = () => {
  const [ready,setready]=useState(false)
  const startInterview = () => {

    toast((t) => (
      <span >
       <b className='text-black '>Select the topic for your interview and Level</b>
        
      </span>
    ));
  setready(true)}

  return (
    <main className="bg-gradient-to-br  from-10% from-black  via-30% via-[#6C71F09B] via-30% via-blue-500  via to-pink-500 w-[100%] h-[100vh]">
    <Toaster />
    <div className="flex flex-col">
      <SideNavBar active='interview' />
      <main className='w-[100%] flex'>
        <Topics/>
        </main>
      
    
     
        
    </div>
  </main>
  )
}

export default interview