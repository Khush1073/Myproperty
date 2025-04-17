import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Navbar = () => {
  const [show, setShow] = useState(false); // For hamburger menu
  const [showLogin, setShowLogin] = useState(false); // For login modal
  const [showSignUp, setShowSignUp] = useState(false); // For sign-up modal

  const handleButtonToggle = () => {
    setShow(!show);
  };

  const handleLoginToggle = () => {
    setShowLogin(!showLogin);
  };

  const handleSignUpToggle = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <div className="navbox">
        <div className="logobox">
          <img
            src="./building-property-svgrepo-com.svg"
            height="80px"
            width="80px"
            alt="logo"
          />
          <h1 className="logotext">My property</h1>
        </div>
        <div className="naviconbox">
          <ul className={show ? "show" : ""}>
            <li>
              <NavLink to="/" className="navpages">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Buy" className="navpages">
                Buy/ Rent
              </NavLink>
            </li>
            <li>
              <NavLink to="/Sell" className="navpages">
                Sell
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" className="navpages">
                ContactUs
              </NavLink>
            </li>
            <li>
              <button className="navpages navbtn" onClick={handleLoginToggle}>
                Login
              </button>
            </li>
            <li>
              <button className="navpages navbtn" onClick={handleSignUpToggle}>
                Sign Up
              </button>
            </li>
          </ul>
          <div className="ham-menu">
            <button onClick={handleButtonToggle}>
              <GiHamburgerMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Login */}
      {showLogin && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleLoginToggle}>
              &times;
            </button>
            <Login  onSwitchToLogin={() => {
                handleSignUpToggle();
                handleLoginToggle();}}/>
          </div>
        </div>
      )}

      {/* Modal for Sign Up */}
      {showSignUp && (
        <div className="modal">
          <div className="modal-content2">
            <button className="close-button" onClick={handleSignUpToggle}>
              &times;
            </button>
            <SignUp
              onSwitchToLogin={() => {
                handleSignUpToggle();
                handleLoginToggle();
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
