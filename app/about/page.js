import React from 'react'
import Nav from '../components/nav'

const about = () => {
  return (
    <main>
    <div className="flex">
      <Nav active='about' /> 
      <main className="flex-1 p-4">about</main>
    </div>
  </main>
  )
}

export default about