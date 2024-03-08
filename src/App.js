import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import LoginButton from './components/LoginButton'
import Profile from './components/Profile'
import LogoutButton from './components/LogoutButton'
const App = () => {

  const {isAuthenticated, isLoading } = useAuth0()
  if(isLoading) return <h1>Loading....</h1>
  return (
    <div>App
      {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
      
      <Profile/>
    </div>

  )
}

export default App