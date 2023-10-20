import React, { useState, useEffect } from 'react';

const InterviewQuestionnaire = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(''));
  const [showResults, setShowResults] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [answeredQuestions, setAnsweredQuestions] = useState([]);

  useEffect(() => {
    loadQuestion();
  }, [currentQuestionIndex]);

  const loadQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const lines = currentQuestion.trim().split('\n');
    const questionText = lines[0].trim();
    const questionOptions = lines.slice(1, 5).map(option => option.trim());

    setQuestionText(questionText);
    setOptions(questionOptions);
    setSelectedOption(answers[currentQuestionIndex]);
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
          <div className="text-lg font-bold">Questions:</div>
          {questions.map((_, index) => (
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
            {/* ... (results display logic remains the same) */}
          </div>
        ) : (
          <div>
            {/* ... (question and options display logic remains the same) */}
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

