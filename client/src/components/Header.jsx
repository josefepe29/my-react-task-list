import { BiMenu } from "react-icons/bi";

export const Header = () => {
    
    const img = "http://clipart-library.com/img/1830882.png"
    return (
        <header>
            <nav className="navbar">
                <span className="hamburger-btn"><BiMenu/></span>
                <a href="#" className="logo">
                    <img src={img} alt="logo" />
                    <h2>ToDo List</h2>
                </a>
                <ul className="links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
                <button className="login-btn">LOG IN</button>
            </nav>
        </header>
    )
}