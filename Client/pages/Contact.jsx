import { useState } from "react";

const Contact = () => {
  const [text, setText] = useState({
    username: "",
    useremail: "",
    usertext: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value, // Correctly update each field
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted text:", text); // Now, username and email will appear
  };

  return (
    <>
      <div className="contheadtext">
        <span>Please enter your query here, we will reach you soon...</span>
      </div>
      <form onSubmit={handleSubmit} className="contactform">
        <div className="contactbox2">
          <div className="coustomername">
            <span>Username:</span>
            <input
              type="text"
              name="username" // ✅ Added name attribute
              className="continputbox"
              value={text.username}
              onChange={handleChange}
            />
          </div>
          <div className="coustomeremail">
            <span>Email:</span>
            <input
              type="email"
              name="useremail" // ✅ Added name attribute
              className="continputbox"
              value={text.useremail}
              onChange={handleChange}
            />
          </div>
          <div className="coustomerquery">
            <span>Query:</span>
            <textarea
              name="usertext" // ✅ Added name attribute
              value={text.usertext}
              onChange={handleChange}
              rows="5"
              cols="30"
              placeholder="Enter your feedback here..."
              className="feedbackcont"
            ></textarea>
          </div>
          <div className="contactsubmit">
            <button type="submit" className="contsubbtn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
