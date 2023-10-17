import React from 'react'
import Nav from '../components/nav'

const interview = () => {
  return (
    <main>
    <div className="flex">
      <Nav active='interview' /> 
      <main className="flex-1 p-4">interview</main>
    </div>
  </main>
  )
}

export default interview