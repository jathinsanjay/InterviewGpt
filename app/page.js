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
      <Head>
        <title>Interview GPT Home</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold mx-auto">Interview GPT -AI powered interview Preparation</h1>
        <p>Prepare for your interviews with AI-generated questions.</p>
        <Link href="/interview">
          <div className="text-blue-500 hover:underline">Choose Topics</div>
        </Link>
      </main>
    </div>


        </main>
      </div>
    </main>
  );
}
