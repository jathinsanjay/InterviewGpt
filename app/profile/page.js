"use client"
import Nav from '../components/nav'
import Profile from '../components/profile'

const page = () => {
  return (
    <main>
    <div className="flex flex-col">
      <Nav active='profile' /> 
     <Profile/>
    </div>
  </main>
  )
}

export default page