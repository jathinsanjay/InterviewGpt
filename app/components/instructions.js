import React, { useState } from 'react';

function App() {
  const [checkbox, setCheckbox] = useState(false);
  const originalText = "Welcome to the online interview. Please read the following instructions carefully:\n1. Ensure you are in a quiet and well-lit environment.\n2. Test your camera and microphone to ensure they are working properly.\n3. Answer all questions honestly and to the best of your abilities.\n4. Eliminate Distractions: Turn off notifications on your computer and silence your phone. Close unnecessary tabs or applications on your computer.\n5. Arrive Early: Log in to the interview platform a few minutes before the scheduled time to show punctuality and allow for technical issues.\n6. Internet Security: Ensure your computer and software are up to date with the latest security patches. Use a secure, private network, preferably not public Wi-Fi, to prevent potential interruptions.\n7. Time Management: Keep track of time and allocate a certain amount for each question or section of the interview.\n8. Face recognition: Make sure your face is clearly visible during the entire interview. If face recognition fails or is required, follow the platform's instructions for re-verification.";
  const textArray = originalText.split('\n');

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox); // Toggle the checkbox state
  };

  return (
    <div className="bg-transparent mx-8   font-sans flex flex-col items-center justify-center rounded-[20px]">

      <div
        id="instructions"
        className="w-80 p-7 border border-gray-300 rounded shadow-xl border-white border-2 shadow-black bg-gradient-to-b from-50% from-white to-transparent text-left my-4 w-full m-8 rounded-[20px]"
      >
        {textArray.map((text, index) => (
          <p key={index} className="p-2 font-semibold text-black">
            {text}
          </p>
        ))}
      </div>
      <div className="flex">
        <input type="checkbox" className="text-2xl text-center font-bold text-violet-900  " onClick={handleCheckboxChange} onChange={handleCheckboxChange} checked={checkbox} />
        <div className="text-white font-bold p-2  ">
          I agree to follow the instructions provided above when taking the test, and I also accept that my score may be reduced to 0 if any form of misconduct is detected.
        </div>
      </div>
      <button
        className={`text-white px-4 py-2 font-bold rounded hover:bg-blue-700 mt-4 mx-auto justify-center px-10 py-4 rounded-xl cursor-pointer ${checkbox ? 'bg-black hover-bg-blue-700' : 'bg-gray-300'}`}
        disabled={!checkbox}
      >
        <a href='/interview'>Start Interview</a>
        
      </button>
    </div>
  );
}

export default App;
