"use client"
import SideNavBar from './components/nav';
import Head from 'next/head';
import Link from 'next/link';


export default function Home() {
  return (
    <main>
      <div className="flex">
        <SideNavBar active='home' />
        <main className="flex-1 p-4">
       


    <div>
    
    </div>
<div className="min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-500 py-8 text-white text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold tracking-tight">ChatGPT Interview System</h1>
          <p className="text-2xl mt-4">Simplify Your Interview Process with AI</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-12">
        {/* Feature Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">Streamline Interviews</h2>
            <p className="text-lg">
              Our ChatGPT-powered interview system offers a seamless
              experience, allowing you to conduct interviews efficiently and
              effectively. Save time and resources while maintaining quality
              interactions.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
           
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <ul className="list-disc pl-6 text-lg">
            <li>AI-Enhanced Interviews</li>
            <li>Natural Language Understanding</li>
            <li>Efficient Candidate Evaluation</li>
            <li>Automated Scheduling</li>
            <li>Customizable Questions</li>
          </ul>
        </section>

        {/* Get Started Section */}
        <section className="mt-12">
          <h2 className="text-3xl font-semibold mb-4">Get Started Today</h2>
          <p className="text-lg">
            Are you ready to transform your interview process? Contact us to
            learn more, request a demo, or get started with our ChatGPT
            interview system.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 px-6 mt-4 transition duration-300 shadow-lg">
            Contact Us
          </button>
        </section>
      </main>
    </div>

        </main>
      </div>
    </main>
  );
}




