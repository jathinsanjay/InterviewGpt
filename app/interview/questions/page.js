"use client"
import React from 'react'
import Nav from '../components/nav'
import Questions from '../../components/question'


const Questions = () => {
 
  const [questions, setQuestions] = useState([]);
  
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState('medium');
    const getQuestions = async () => {
    setLoading(true);

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: `Interview questions on ${selectedTopic}`,
      },
    )}
    try {
      const response = await fetch(`http://localhost:8000/questions/${selectedTopic}/${level}`, options);
      if (response.ok) {
        const data = await response.json();
        const questions = data.choices[0].message;
        const data2 = questions.content.split(/Q:\s/).filter((ques) => ques.trim() !== '');
        console.log(data2)
        setQuestions(data2);
        setLoading(false)
        setNotSelected(false);
        setSelected(true);
      } else {
        toast.error('Failed to fetch questions.');
      }
    } catch (error) {
      toast.error('Error while fetching questions:', error);
    }
  };
  return (
    <main >
    <div className="flex">
      <Nav active='interview' /> 
      <main className="flex-1 p-4">
        <Questions />
        <div className="bg-blue-500 p-2 rounded-b-lg flex justify-end items-center">
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            className="text-white p-2 rounded-lg bg-red-500 hover:bg-red-600 w-60"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button className="text-white p-2 rounded-lg bg-purple-900 hover-bg-purple-600" onClick={handlesubmit}>
            Submit
          </button>
        )}
      </div>
        </main>
    </div>
  </main>
  )
}

export default Questions