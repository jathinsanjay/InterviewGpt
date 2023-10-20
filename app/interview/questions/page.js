"use client"
import React from 'react'
import Nav from '../components/nav'
import Questions from '../../components/question'

const Questions = () => {
  return (
    <main>
    <div className="flex">
      <Nav active='interview' /> 
      <main className="flex-1 p-4"><Questions/></main>
    </div>
  </main>
  )
}

export default Questions