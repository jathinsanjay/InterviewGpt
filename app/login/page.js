"use client"

import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
   
    registrationNumber: "",
    password: "",
  });

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


       
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-200 to-blue-100 backdrop-blur-md">
      <div className="bg-white p-8 rounded-lg shadow-lg w-98 animate-fade-in transform transition-transform duration-500">
        <h1 className="text-3xl font-semibold text-center mb-4 text-blue-500">
          Registration Form
        </h1>
        {isRegistered ? (
          <div>
            <h2 className="text-2xl mb-2 text-blue-500">Profile Information</h2>
        
            <p>
              <strong>Registration Number:</strong> {formData.registrationNumber}
            </p>
            <div className="w-80 h-72 relative flex justify-center items-center">
              {capturedImage && (
                <img
                  src={capturedImage}
                  alt="Captured Image"
                  className="rounded-lg max-h-52 w-full"
                />
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
            
              <label htmlFor="registrationNumber" className="text-gray-600">
                Registration Number
              </label>
              <input
                type="text"
                name="registrationNumber"
                id="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                className="form-input w-full bg-gray-100"
                placeholder="RA0000000000000"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input w-full bg-gray-100"
                placeholder="Password"
              />
            </div>
            <div className="w-80 h-72 relative flex justify-center items-center">
              <Webcam
                ref={webcamRef}
                videoConstraints={videoConstraints}
                screenshotFormat="image/jpeg"
                className={`w-full h-full ${
                  capturedImage ? "hidden" : "block"
                }`}
              />
              {capturedImage && (
                <img
                  src={capturedImage}
                  alt="Captured Image"
                  className="rounded-lg max-h-52 w-full absolute inset-0"
                />
              )}
            </div>
            {isCaptured && (
              <button
                type="submit"
                className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 w-full transform transition-transform duration-300 hover:scale-105"
              >
                Register
              </button>
            )}
            {!isCaptured && (
              <button
                type="button"
                onClick={handleCapture}
                className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 w-full transform transition-transform duration-300 hover:scale-105"
              >
                Capture Image
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;
