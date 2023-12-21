"use client"
import React, { useEffect } from 'react';
import { useState } from 'react';
import Questions from '../../../components/question';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../../../loader/page';


const page = (context) => {
  const domain = context.params.selectedTopic;
  const [questions, setQuestions] = useState([]);
  const [tab,settab]=useState(0)
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
        message: `Interview questions on ${domain}`,
      },
    )}
    try {
      const response = await fetch(`http://localhost:8000/questions/${domain}/${level}`, options);
      if (response.ok) {
        const data = await response.json();
        const questions = data.choices[0].message;
        const data2 = questions.content.split(/Q:\s/).filter((ques) => ques.trim() !== '');
        console.log(data2)
        setQuestions(data2);
        setLoading(false)
        setNotSelected(false);
        setSelected(true);
      } 
      else {
        toast.error('Failed to fetch questions.');
      }
    } catch (error) {
      toast.error('Error while fetching questions:', error);
    }
  };
  const tabswitched = () => {
    if(document.hidden){
      settab(tab+1)
      toast.error('You switched the tab!!')
    }
    // if(tab==3){
    //   window.location.href='/interview'
    // }
  }
  useEffect(() => {
    document.addEventListener("visibilitychange", tabswitched);
    return () => {
      document.removeEventListener("visibilitychange", tabswitched);
    };
  }, [tab]);
  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <>
    <Toaster/>
   {
    loading ?<Loader/> : <Questions questions={questions} />


   }
    </>
  );
};

export default page;
