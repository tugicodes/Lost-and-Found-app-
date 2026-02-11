import logo1 from '../assets/logo1.png'

export default function Navigation (){
    return(
        <nav className="navBar">
            <div className="logoHolder">
                <img src={logo1} alt="lost and found app logo" className="logo"/>
            </div>
            <ul className="menu">
                <li>Home</li>
                <li>About Us</li>
                <li>Contacts</li>
                <li>Login</li>
            </ul>
        </nav>
    )
}