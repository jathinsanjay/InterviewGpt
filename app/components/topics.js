"use client"
import React, { useState } from 'react';
import QuestionList from '../components/question'
import Loader from 'react-loader-spinner';

const topics = [
  { name: 'Data Structures and Algorithms', color: 'bg-blue-500' },
  { name: 'Computer Architecture', color: 'bg-green-500' },
  { name: 'Computer Networks', color: 'bg-yellow-500' },
  { name: 'Operating Systems', color: 'bg-red-500' },
  {name:'C language',color:'bg-purple-500'}
];

const TopicPage = () => {
    const [questions,setquestions]=useState([])
    const[notselected,setnotselected]=useState(true)
    const[selected,setselected]=useState(false)
    const [loading, setLoading] = useState(false); 

    const getQuestions = async (topic) => {
      setLoading(true); 

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Interview questions on ${topic.name}`,
      }),
    };
    try {
      const response = await fetch(`http://localhost:8000/questions/${topic.name}`, options);
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
       const questions= data.choices[0].message
       console.log(questions.content)
       
       const data2 = questions.content.split(/\d+\.\s/).filter(ques => ques.trim() !== '');
       
       console.log(data2);
       setquestions(data2)
       setnotselected(false)
       setselected(true)
       console.log(questions)
       
       

      } else {
        console.error('Failed to fetch questions.');
      }
    } catch (error) {
      console.error('Error while fetching questions:', error);
    }
  };

  return (
    <div className="flex flex-col flex-wrap items-center justify-center">
     {notselected&& <h1 className="text-2xl font-bold mb-4">Choose Interview Topics</h1>}
     {selected&& <h1 className="text-2xl font-bold mb-4"> Answer the following questions</h1>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
     {notselected&&topics.map((topic, index) => (
          <div
            key={index}
            className={`p-20 font-extrabold rounded-lg text-white ${topic.color} hover:${topic.color} transition duration-300 cursor-pointer`}
            onClick={() => getQuestions(topic)}
          >
            {topic.name}
          </div>
        ))}
      </div>
      {selected&&<QuestionList questions={questions} />}
    </div>
  );
};

export default TopicPage;
