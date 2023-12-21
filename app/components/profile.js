import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProfilePage = () => {
  const [user, setUser] = useState({
    registrationNumber: '',
    firstName: '',
    lastName: '',
    lastLoggedIn: '',
    email: '',
  });

  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

  useEffect(() => {
    async function fetchData() {
      const User = localStorage.getItem("registrationno");

      console.log(User);

      if (!User) {
        // window.location.href = "/";
        return;
      }

      setId(User);

      try {
        const response = await fetch(`https://wcvhwrunn9.execute-api.ap-south-1.amazonaws.com/dev/student-profile-retrieval?registrationNumber=${User}`);
        const data = await response.json();
        console.log(data)
        setdata(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Error fetching user data. Please check the console for details.');
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Toaster />

      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center text-blue-500 mb-4">
          User Profile
        </h1>

        {loading ? (
          <p className="text-center">Loading user data...</p>
        ) : (
          <>
            <div className="mb-4">
              <label className="text-gray-600 font-bold">Employee ID:</label>
              <p className="text-gray-800">{data.RegistrationNumber}</p>
            </div>
            <div className="mb-4">
              <label className="text-gray-600 font-bold">First Name:</label>
              <p className="text-gray-800">{data.firstName}</p>
            </div>
            <div className="mb-4">
              <label className="text-gray-600 font-bold">Last Name:</label>
              <p className="text-gray-800">{data.lastName}</p>
            </div>
            <div className="mb-4">
              <label className="text-gray-600 font-bold">Last Logged In:</label>
              <p className="text-gray-800">{data.LastLoggedIn}</p>
            </div>
            <div className="mb-4">
              <label className="text-gray-600 font-bold">Email:</label>
              <p className="text-blue-500">{data.Email}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
