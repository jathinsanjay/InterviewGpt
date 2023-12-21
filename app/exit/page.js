
import React from 'react';
import Nav from '../components/nav';



const ThankYou = () => {
    return (
        <main className="bg-gradient-to-br  from-10% from-black  via-30% via-[#6C71F09B] via-blue-500 Svia-30% via-indigo-500  via-10% via-purple-500 via to-pink-500 w-[100%] h-[100vh]">
        <div className="flex flex-col">
          <Nav active='interview' />
          <main className='w-[50%] mx-auto text-center mt-10 '>
        <div>
         
        <div className="bg-slate-400 rounded-2xl p-10 ">
        
        <title>Thank You</title>
    
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
           <div className="font-bold text-blue-800 text-3xl p-4">Your responses has been Recorded.</div>
            <div>
                <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                    Thank You for Taking the Exam!
                </h1>
                <p className="mt-3 max-w-3xl text-lg text-gray-900">
                    We appreciate your time and effort.
                </p>
          
         
        </div>
    </div>
</div>
        </div>
        </main>
        </div>
        </main>
      );
        
    
};

export default ThankYou;
