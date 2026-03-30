import logo1 from '../assets/logo1.png'
import { Link } from 'react-router-dom'

export default function Navigation (){
    return(
        <nav className="navBar">
            <div className="logoHolder">
                <img src={logo1} alt="lost and found app logo" className="logo"/>
            </div>
            <ul className="menu">
                <li><Link to="/"> Home </Link></li>
                <li><Link to="/services"> About Us </Link></li>
                <li><Link to="/contacts"> Contacts </Link></li>
                <li><Link to="/login"> Login </Link></li>
                <li><Link to="/signup"> Sign Up </Link></li>
            </ul>
        </nav>
    )
}