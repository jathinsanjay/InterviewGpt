import React, { useState } from 'react';
import QuestionList from '../components/question';
import ReactLoading from "react-loading";
import toast, { Toaster } from 'react-hot-toast';

const topics = [
  { name: 'Data Structures and Algorithms', color: 'bg-gradient-to-r from-cyan-500 to-blue-500' },
  { name: 'Computer Architecture', color: 'bg-gradient-to-r from-yellow-500 to-red-500' },
  { name: 'Computer Networks', color: 'bg-gradient-to-r from-green-400 to-blue-500' },
  { name: 'Operating Systems', color: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' },
  { name: 'C language', color: 'bg-gradient-to-r from-purple-500 to-blue-500 ' },
];

const TopicPage = () => {

  const [selectedTopic, setSelectedTopic] = useState(null); // Track selected topic

  // Function to handle topic selection and change the selectedTopic state
  const handleTopicSelection = (selectedTopic) => {
   
    setSelectedTopic(selectedTopic);
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center ">
      <div>
        <Toaster />
      </div>
      
        <h1 className="text-3xl font-bold mb-4 text-black font-extrabold font-cursive
        ">Choose Interview Topic</h1>
      
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          topics.map((topic, index) => (
            <div
              key={index}
              className={`p-20 text-2xl font-black   m-2 font-extrabold rounded-[20px]  shadow-xl border-white border-2 shadow-black
              ${selectedTopic === topic.name ? 'bg-black text-white' : 'bg-gradient-to-b from-50% from-white to-transparent text-[#380869]'} 
              cursor-pointer transition duration-300 hover:animate-pulse`}
              onClick={() => handleTopicSelection(topic.name)}
            >
              {topic.name}
            </div>
          ))}
      </div>
      {/* {notSelected && (
        <div className="text-2xl font-bold mt-5"> Select Difficulty Level:</div>
      )}
      {notSelected && (
        <div className="flex p-10 margin-5">
          <div
            className={`p-5 mx-6 font-extrabold rounded-lg text-white bg-black hover:white ${level === "easy" ? 'bg-green-600' : 'bg-black'}  transition duration-300 cursor-pointer`}
            onClick={() => setLevel('easy')}
            
          >
            Easy
          </div>
          <div
           className={`p-5 mx-6 font-extrabold rounded-lg text-white bg-black hover:white ${level === "medium" ? 'bg-green-600' : 'bg-black'}  transition duration-300 cursor-pointer`}
            onClick={() => setLevel('medium')}
          >
            Medium
          </div>
          <div
             className={`p-5 mx-6 font-extrabold rounded-lg text-white bg-black hover:white ${level === "hard" ? 'bg-green-600' : 'bg-black'}  transition duration-300 cursor-pointer`}
            onClick={() => setLevel('hard')}
          >
            Hard
          </div>
        </div>
      )} */}
        <div className="text-2xl font-bold mt-2 bg-black text-white rounded-lg p-2 cursor-pointer" >
          <a href={`/interview/questions/${selectedTopic}`}>Next</a>
          
        </div>
     
    </div>
  );
};

export default TopicPage;
