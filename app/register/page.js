"use client"
import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';


const Register = () => {
  const { handleSubmit } = useForm();
  const videoRef = useRef();
  const canvasRef = useRef();
  const [cameraStarted, setCameraStarted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
  });

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setCameraStarted(true);
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const capturePhoto = () => {
    const context = canvasRef.current.getContext('2d');
    context.drawImage(videoRef.current, 0, 0, 320, 240);
  };

  const handleFieldChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (data) => {
    // Handle the form submission, including the captured photo
    const imageDataURL = canvasRef.current.toDataURL('image/jpeg');
    data.photo = imageDataURL;
    console.log(data);
  };

  useEffect(() => {
    if (cameraStarted) {
      // Enable or disable form field input based on cameraStarted state
      document.querySelectorAll('input').forEach((input) => {
        input.disabled = cameraStarted;
      });
    }
  }, [cameraStarted]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Registration Page</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="firstName" className="block">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleFieldChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleFieldChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleFieldChange}
              className="border border-gray-300 p-2 w-full rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block">Take a Photo for Face Recognition</label>
            <div className="flex items-center mb-2">
              <button
                onClick={startCamera}
                className={`bg-blue-500 text-white p-2 rounded ${
                  cameraStarted ? 'bg-gray-400 cursor-not-allowed' : 'hover:bg-blue-600'
                }`}
                disabled={cameraStarted}
              >
                Start Camera
              </button>
              <button
                onClick={capturePhoto}
                className={`ml-2 bg-blue-500 text-white p-2 rounded ${
                  cameraStarted ? 'hover-bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!cameraStarted}
              >
                Capture Photo
              </button>
            </div>
            <div className="border border-gray-300 w-full rounded">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                className={`w-full ${cameraStarted ? 'block' : 'hidden'}`}
              />
              <canvas ref={canvasRef} width="320" height="240" style={{ display: 'none' }} />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
