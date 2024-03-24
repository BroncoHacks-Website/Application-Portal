import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login"); // Set path to whatever the path to the login page is.
  }

  return (
    <div className="container">

      <div className="createAccountHeader">
        <h1>Create an account!</h1>
      </div>

      <div className="createAccountInputs">
        <form>
          <label>Email:</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            pattern="^(?=.*[A-Z])(?=.*[0-9])(?=.*([\W]|[_])).{8,}$"
          />

          <button type="submit">Sign Up</button>
        </form>
      </div>

      <div className="loginButtonHeader">
        <h1>Already have an account?</h1>
      </div>

      <div className="loginButton"> 
        <button onClick={handleClick}>Log In</button>
      </div>

    </div>
  );
}

export default SignupPage;