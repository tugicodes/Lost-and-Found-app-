import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavigationBar'
import Banner from './Components/Banner'
import LoginPage from './Components/LoginPage'

function App() {
 

  return (
    <>
     <Navigation/>
     <Banner/>
     <LoginPage/>
    </>
  )
}

export default App
