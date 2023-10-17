import Nav from '../components/nav'

const page = () => {
  return (
    <main>
    <div className="flex">
      <Nav active='profile' /> 
      <main className="flex-1 p-4">Profile</main>
    </div>
  </main>
  )
}

export default page