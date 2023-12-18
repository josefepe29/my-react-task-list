import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";

export const Header = () => {
  const img = "http://clipart-library.com/img/1830882.png";
  const { auth, handleLogout, user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <span className="hamburger-btn">
        <BiMenu />
      </span>
      <Link to="/" className="logo">
        <img src={img} alt="logo" />
        <h2>ToDo List</h2>
      </Link>
      <ul className="links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      {auth ? (
        <>
          <ul className="links">
            <li>
              <Link to="/tasks">Tasks</Link>
            </li>
          </ul>
          <div>
            <span className="welcome-span">
              Welcome {user?.name.split(" ")[0]}
            </span>
            <button
              onClick={() => {
                handleLogout();
              }}
            >
              <Link to="/" className="login-btn">
                LOG OUT
              </Link>
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <Link to="/sign-up" className="signup-link">
              Signup
            </Link>
            <button>
              <Link to="/login" className="login-btn">
                LOG IN
              </Link>
            </button>
          </div>
        </>
      )}
    </nav>
  );
};
