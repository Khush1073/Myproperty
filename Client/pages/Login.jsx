import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Login = ({ onSwitchToLogin }) => {
    const [loginform, setLoginForm] = useState({
        loginusername: "",
        loginPassword: "",
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
        try {
            const result = await fetch('http://localhost:5000/register', {
                method: 'POST',
                body: JSON.stringify(loginform),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            const response = await result.json();
    
            // Check if the response contains the expected data
            if (response.receivedData) {
                console.log("Username:", response.receivedData.loginusername);
                console.log("Password:", response.receivedData.loginPassword);
            } else {
                console.error("Unexpected response structure:", response);
            }
        } catch (error) {
            console.error('Error during login:', error);
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
                            value={loginform.loginPassword}
                            name="loginPassword"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="flgbox">
                        <button onClick={handleClick}>Login</button>
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
