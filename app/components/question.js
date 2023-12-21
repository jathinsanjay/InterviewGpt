import React, { useState, useEffect } from 'react';
import './questions.css'
import { set } from 'react-hook-form';

const InterviewQuestionnaire = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [response, setresponse] = useState(Array(questions.length).fill(''));
  const[score,setscore]=useState(0)
  const [showResults, setShowResults] = useState(false);
  const [questionText, setQuestionText] = useState([]);
  const [options, setOptions] = useState([]);
  const[question,setQuestion]=useState(Array(questions.length).fill(''));

  const [selectedOption, setSelectedOption] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  
questions=questions.slice(1,-1)
  useEffect(() => {
    loadQuestion();
  }, [currentQuestionIndex]);
  const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (currentQuestion) {
      const string = 'ptions:';
      const foundIndex = currentQuestion.indexOf(string);
  
      if (foundIndex !== -1) {
        
        const questionText = currentQuestion.slice(0, foundIndex - 1);
        setQuestion(questionText)
  
        const opt = currentQuestion.slice(foundIndex + 7);
  
       
        const optLines = opt.split('\n');
        const updatedresponse = [...response];
        updatedresponse[currentQuestionIndex] =optLines[5].slice(8);
        
        setresponse(updatedresponse);
        console.log(response)
        

  
        const questionOptions = optLines.slice(1, 5).map(option => option.trim());
  
        setQuestionText(questionText);
        console.log(questionText)
        setOptions(questionOptions);
        setSelectedOption(answers[currentQuestionIndex]);
      }
    }
  };
  
  

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {    
      const scored = calculateScore();
      console.log(scored)
      setscore(scored)
      setShowResults(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option.slice(0,1);
    
    setAnswers(updatedAnswers);
    console.log(answers)

    // Update the list of answered questions
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const handleQuestionNumberClick = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };
  const handlesubmit=()=>{
    const scored = calculateScore();
  console.log(scored)
  setscore(scored)

  }
const calculateScore = () => {
    let score = 0;
    let index=0;

    questions.forEach((question, index) => {
      const answer = answers[index];
      console.log(answer)
      const correctAnswer = response[index];
      console.log(correctAnswer)
      index=index+1

      if ((answer === correctAnswer)&&(answer!=='')) {
        score = score+1;
      }
    });

    return (score);
  };

  

  return (
    <main className={showResults?'':'bg'}>
    <div className=" p-4 rounded-lg  min-w-full">{!showResults &&
      <h1 className='text-red-600 font-black bg-black p-3 w-[20%] mx-auto text-center rounded-[20px]'>Don't Switch Your Tab</h1>}
   
      <div className="p-2 ">
        <div className="flex space-x-2">
          <div className="text-lg font-bold">{showResults?" " :"Questions:"}</div>
          {!showResults&&questions.map((_, index) => (
            <div
              key={index}
              onClick={() => handleQuestionNumberClick(index)}
              className={`cursor-pointer  p-2 rounded-lg  font-bold text-white box-border ${
                answeredQuestions.includes(index) ? 'bg-green-500' : 'bg-red-600'
              }`}
            >
              Q{index + 1}
            </div>
          ))}
        </div>
        {showResults ? (
  <div className='bg-gradient-to-b from-50% from-[#D9D9D9] to-transparent h-[500px] rounded-[20px] flex flex-col flex-around'>
    <div className='flex flex-col p-4 m-8'>
      <h1 className='font-lg text-black font-bold'>Total No of questions:{questions.length-1}</h1>
      <h1 className='font-lg text-black font-bold'>No of Questions attempted:{answeredQuestions.length}</h1>
      <h1 className='font-lg text-black font-bold'>No of Questions answered correct:{score}</h1>
    </div>
    <div className='w-[1000px] mx-auto text-3xl text-black font-bold p-6 text-center'>OVER ALL SCORE:{score}/{questions.length-1}</div>
    <div className='w-[1000px] mx-auto text-3xl text-red-900 font-bold p-6 text-center p-10 m-8'>Thank you for taking the time to complete the exam ! Your participation is greatly appreciated.
</div>
        
    
    
    


  
  </div>
) : (
  <div className='p-4'>
   
    <p className="text-lg bg-black text-white font-bold rounded-lg p-4">{questionText}</p>

    <div className="mt-4">
      {options.map((option, index) => (
        <div
          key={index}
          className={`cursor-pointer mb-2 p-2 font-bold rounded-lg ${
            selectedOption === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-300'
          }`}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  </div>
)}

      </div>
      <div className="flex justify-between items-center p-2">
       {!showResults&& <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={handleNext}
         
        >
          Next
        </button>}
        {showResults && (
          <button
            className="bg-red-600 text-white font-bold p-2 m-10 rounded-lg w-[80px] mx-auto  animate-bounce"
            onClick={handlesubmit}
          >
            <a href='/exit'>Submit</a>
            
          </button>
        )}
        </div>
    </div>
    </main>
  );
};

export default InterviewQuestionnaire;