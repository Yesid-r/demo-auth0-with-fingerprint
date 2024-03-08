import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
const App = () => {

  const { isLoading } = useAuth0()
  if(isLoading) return <h1>Loading....</h1>
  return (
    <div>
      
      <Navbar />
      
      <Profile/>
    </div>

  )
}

export default App