"use client"
import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import logo from '../components/imgs/gpt.png';
import './register.css'
import { set } from "react-hook-form";



const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    registrationNumber: "",
    password: "", // Add the "Password" field
    // Add other registration fields as needed
  });
const [capture,setcapture]=useState(false)
  const [capturedImage, setCapturedImage] = useState(null);
  const [base64, setBase64] = useState(null);

  const [isCaptured, setIsCaptured] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    console.log("Captured Image:", base64);
  }, [capturedImage]);

  const webcamRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
 
  const handleCapture = () => {
    setcapture(true)
    if(capture==true){
    const imageSrc = webcamRef.current.getScreenshot();

    setCapturedImage(imageSrc);
    setIsCaptured(true);

    const commaIndex = imageSrc.indexOf(",");

    const base64Data = imageSrc.slice(commaIndex + 1);
    setBase64(base64Data);
  };

  const handleRegistration = () => {
    setIsRegistered(true);

    const registrationData = {
   
      "registration": formData.registrationNumber,
      "password": formData.password, // Include the password
      "image": base64
    };
    console.log(registrationData)
    setregisterno(registrationData.registration)
    
      
    localStorage.setItem("registrationno",registrationData.registration)

    
    fetch("https://zoisb8kgbe.execute-api.ap-south-1.amazonaws.com/dev/student-auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
       
      },
      body: JSON.stringify(registrationData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration response:", data);
        console.log(data.message)
        if(data.message==="Login successful."){
          
          fetch(`https://wcvhwrunn9.execute-api.ap-south-1.amazonaws.com/dev/student-profile-retrieval?registrationNumber=${registrationData.registration}`)

          .then((response) => response.json())
         
          window.location.href = "/home";
         
         
          
        }
        else {
          toast.error(data.message||"Reload the page")
        }


       
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration();
  };

return (
  <main className="main" >
  <div> 
  <div>
    <div><Toaster/></div>
      <div>
        <div className="p-9 w-full text-center flex mx-auto justify-center">
          <div className=''>
            <Image
              src={logo}
              width={90}
              height={90}
              alt="logo"
            />
          </div>
          <h1 className='text-5xl py-4 font-bold text-white'>InterviewGPT</h1>
        </div>
      </div>
<div className='flex justify-around w-full p-4'>
      <div className='flex flex-col w-[50%]'>
        <div className="div1">
          <h1 className='text-5xl font-bold text-white py-2 m-2'>Create New Account</h1>
        </div>

        <div className="text-white py-2 m-2 inline">
          already a user ?<a className='text-[#3E43BD] font-bold p-1'>Login</a>
        </div>

        <div className="w-[100%] flex justify-around">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="form-input w-[48%] bg-brown-600 text-black rounded-[15px] p-3 "
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="form-input w-[48%] bg-brown-600 text-black rounded-[15px] p-3 "
            placeholder="Last Name"
          />
        </div>

        <div className="w-[100%] p-4">
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input w-[100%] bg-brown-600 text-black rounded-[15px] p-3 "
            placeholder="email"
          />
        </div>

        <div className="w-[100%] flex pb-2">
          <input
            type="text"
            name="registrationNumber"
            id="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleInputChange}
            className="form-input w-[50%]  text-black rounded-[15px] p-3 m-2 "
            placeholder="Employee ID"
          />
          <select className='w-[50%] rounded-[15px] p-2 h-[50px] m-auto'>
            <option value="Select Department">Select Department</option>
            <option value="Cintel">Cintel</option>
            <option value="DSBS">DSBS</option>
            <option value="NWC">NWC</option>
          </select>
        </div>

        <div className="w-[100%] ">
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleInputChange}


            className="form-input w-[80%]  text-black rounded-[15px] p-3 m-2"
            placeholder="Password"
          />
        </div>

        <div className="w-[100%] flex text-white justify-around m-8">
          {!isCaptured&&<button className='bg-[#2E4AAF] p-4 w-[50%] rounded-[12px]   animate-bounce' onClick={handleCapture}>Capture Image</button>}
          {isCaptured&&
            <button  className={`w-[45%] rounded-[12px] p-4 ${isCaptured ? 'bg-[#2E4AAF]' : 'bg-gray-500'}  animate-bounce`} onClick={handleSubmit} >Register</button>}
        </div>
      </div>{
      <div className='bg-transparent w-[50%] '>
  {capture && (
      <Webcam
                ref={webcamRef}
                videoConstraints={videoConstraints}
                screenshotFormat="image/jpeg"
                className={`w-full h-full ${capturedImage ? "hidden" : "block"}`}
              />)}
              {capturedImage && (
                <img
                  src={capturedImage}
                  alt="Captured Image"
                  
                />
                )}
              
      </div>}
      </div>
    </div>
     

    </div>

</main>
  
)
};



export default RegistrationForm;