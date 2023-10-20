"use client"
import React from 'react'
import Nav from '../components/nav'
import Topics from '../components/topics'

const interview = () => {
  return (
    <main>
    <div className="flex">
      <Nav active='interview' /> 
      <main className="flex-1 p-4"><Topics/></main>
    </div>
  </main>
  )
}

export default interview