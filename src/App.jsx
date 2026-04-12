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
import ReportLostItem from "./Components/ReportLostItem";
import ViewLostItems from "./Components/ViewLostItems";


function App() {
 

  return (
    <>
    <Routes>

    <Route
        path="/user-dashboard/*"
        element={
          <ProtectedRoute>
            <UserDashboard />
          </ProtectedRoute>
        }
      >
        <Route path="report" element={<ReportLostItem />} />
        <Route path="view" element={<ViewLostItems />} />
      </Route>

    <Route path="*" element={

      <div className="appLayout">
        <Navigation/>

          <main className="pageContent">
          <Routes>
              <Route path="/" element= {<Banner/>} />
              <Route path="/services" element= {<Services/>} />
              <Route path="/login" element= {<LoginPage/>} />
              <Route path="/contacts" element= {<Contacts/>}/>
              <Route path="/signup" element= {<SignUp/>}/>
          </Routes>
          </main>

        <Footer/>
      </div>
       } />
      </Routes>
     
    </>
  );
}

export default App
