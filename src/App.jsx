import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './Components/NavigationBar'
import Banner from './Components/Banner'
import LoginPage from './Components/LoginPage'
import CardView from './Components/Cards'
import Services from './Components/Services'
import { Routes, Route} from 'react-router-dom'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import SignUp from './Components/SignUp'
import ProtectedRoute from './Components/ProtectedRoute'
import UserDashboard from './Components/userDashboard'

function App() {
 

  return (
    <>
      <div className="appLayout">
        <Navigation/>

          <main className="pageContent">
          <Routes>

              <Route path="/" element= {<Banner/>} />
              <Route path="/services" element= {<Services/>} />
              <Route path="/login" element= {<LoginPage/>} />
              <Route path="/contacts" element= {<Contacts/>}/>
              <Route path="/signup" element= {<SignUp/>}/>

              <Route path= "/user-dashboard"
              element= {
              <ProtectedRoute>
                <UserDashboard />
                </ProtectedRoute>}
              />

          </Routes>
          </main>

        <Footer/>
      </div>
     
    </>
  )
}

export default App
