import React, { useState, useEffect } from 'react';

const InterviewQuestionnaire = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [questionText, setQuestionText] = useState([]);
  const [options, setOptions] = useState([]);
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
  
        const opt = currentQuestion.slice(foundIndex + 7);
  
       
        const optLines = opt.split('\n');
  
        const questionOptions = optLines.slice(1, 5).map(option => option.trim());
  
        setQuestionText(questionText);
        setOptions(questionOptions);
        setSelectedOption(answers[currentQuestionIndex]);
      }
    }
  };
  
  

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);

    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestionIndex] = option;
    setAnswers(updatedAnswers);

    // Update the list of answered questions
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }
  };

  const handleQuestionNumberClick = (questionIndex) => {
    setCurrentQuestionIndex(questionIndex);
  };

  return (
    <div className="bg-gray-200 p-4 rounded-lg shadow-md min-w-full">
      <div className="bg-blue-500 text-white p-2 rounded-t-lg">
        <h2 className="text-2xl font-bold mb-2 text-center">Interview</h2>
      </div>
      <div className="p-2">
        <div className="flex space-x-2">
          <div className="text-lg font-bold">{showResults?" " :"Questions:"}</div>
          {!showResults&&questions.map((_, index) => (
            <div
              key={index}
              onClick={() => handleQuestionNumberClick(index)}
              className={`cursor-pointer text-lg ${
                answeredQuestions.includes(index) ? 'text-green-500' : 'text-red-500'
              }`}
            >
              Q{index + 1}
            </div>
          ))}
        </div>
        {showResults ? (
  <div>
    <h2 className="text-2xl font-bold mb-2 text-center">Review</h2>
    <ul>
      {questions.map((question, index) => (
        <li key={index}>
          <strong>Q{index + 1}:</strong> {question}
          <br />
          <strong>Answer:</strong> {answers[index]}
        </li>
      ))}
    </ul>
  </div>
) : (
  <div>
    {/* Display Questions and Options */}
    <h2 className="text-2xl font-bold mb-2 text-center">Question {currentQuestionIndex + 1}</h2>
    <p className="text-lg">{questionText}</p>

    <div className="mt-4">
      {options.map((option, index) => (
        <div
          key={index}
          className={`cursor-pointer mb-2 p-2 rounded-lg ${
            selectedOption === option
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-200 hover:text-blue-500'
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
      <div className="bg-blue-500 p-2 rounded-b-lg flex justify-end items-center">
        {currentQuestionIndex < questions.length - 1 ? (
          <button
            className="text-white p-2 rounded-lg bg-red-500 hover:bg-red-600 w-60"
            onClick={handleNext}
          >
            Next
          </button>
        ) : (
          <button className="text-white p-2 rounded-lg bg-purple-900 hover-bg-purple-600" onClick={handleNext}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default InterviewQuestionnaire;