import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SignUp = ({ onSwitchToLogin }) => {
  const [SignUpform, setsignupform] = useState({
    signupusername: "",
    signupPassword: "",
    confirmSignupPassword: "",
    useremail: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignupform((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(SignUpform);
  };

  return (
    <form>
      <div className="formbox2">
        <div className="loginboxtext">
          <span className="loginft">Sign Up</span>
        </div>
        <div className="flbox">
          <span className="loginformtext">UserName:</span>
          <input
            type="text"
            value={SignUpform.signupusername}
            name="signupusername"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="fubox">
          <span className="loginformtext">Password:</span>
          <input
            type="password"
            value={SignUpform.signupPassword}
            name="signupPassword"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="fubox">
          <span className="loginformtext">Confirm Password:</span>
          <input
            type="password"
            value={SignUpform.confirmSignupPassword}
            name="confirmSignupPassword"
            onChange={handleInputChange}
          />
        </div>
        <div className="fubox">
          <span className="loginformtext">Email:</span>
          <input
            type="email"
            value={SignUpform.useremail}
            name="useremail"
            onChange={handleInputChange}
          />
        </div>
        <div className="flgbox">
          <button onClick={handleClick}>Sign Up</button>
        </div>
        <div>
          <span
            onClick={onSwitchToLogin}
            style={{ cursor: "pointer", color: "blue" }}
          >
            Already Exist Account.
          </span>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
