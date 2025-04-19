import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ onSwitchToLogin }) => {
    const [loginform, setLoginForm] = useState({
        loginusername: "",
        password: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("Login button clicked");
        console.log("Form data:", loginform);
      
        try {
          const result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify(loginform),
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          const response = await result.json();
      
          if (response.savedData) {
            console.log("Saved user:", response.savedData);
          } else {
            console.error("Unexpected response:", response);
          }
        } catch (error) {
          console.error('Error during login:', error.message);
        }
      };
    
    

    return (
        <>
            <form>
                <div className="formbox">
                    <div className="loginboxtext">
                        <span className="loginft">Login</span>
                    </div>
                    <div className="flbox">
                        <span className="loginformtext">UserName:</span>
                        <input
                            type="text"
                            value={loginform.loginusername}
                            name="loginusername"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="fubox">
                        <span className="loginformtext">Password:</span>
                        <input
                            type="password"
                            value={loginform.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flgbox">
                        <button type="button" onClick={handleClick}>Login</button>
                    </div>
                    <div className="fsbtn">
                        <span
                            onClick={onSwitchToLogin}
                            style={{ cursor: "pointer", color: "blue" }}
                        >
                            Don&apos;t have an account? Sign Up.
                        </span>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;
