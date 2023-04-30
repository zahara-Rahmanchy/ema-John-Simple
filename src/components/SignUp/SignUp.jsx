import React, {useContext, useState} from "react";

import {Link} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProviders";
import "./signUp.css";
const SignUp = () => {
  const [error, setError] = useState("");
  const {createUser} = useContext(AuthContext) || {};
  // console.log({registerUser});

  const handleSignUp = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.compassword.value;
    console.log(email, password, confirm);

    setError("");
    if (password !== confirm) {
      setError(`Password Doesn't match!`);
      return;
    } else if (password.length < 6) {
      setError("Password should be eual or greater than 6 ");
    }

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        alert("Registered Successfully!");
      })
      .catch(error => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>

      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
          <br></br>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />

          <label htmlFor="">Confirm Password</label>
          <input type="password" name="compassword" id="compassword" required />

          <button className="sub-btn" type="submit">
            Sign Up
          </button>
        </div>
        <p>
          <small>
            <Link to="/login">Already have have account? Login</Link>
          </small>
        </p>
      </form>
      <small className="error">{error}</small>
    </div>
  );
};

export default SignUp;
