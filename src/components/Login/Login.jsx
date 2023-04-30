import React, {useContext} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Providers/AuthProviders";
import "./login.css";
const Login = () => {
  const {signIn} = useContext(AuthContext) || {};
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  // if  location.state is present then goto location.state.from, then if from prensetn then got to
  // location.state.from.pathname, else to home page
  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, {replace: true});
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>

      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" required />
          <br></br>
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="password" required />

          <button className="sub-btn" type="submit">
            Login
          </button>
        </div>

        <p>
          <small>
            <Link to="/signup">New to ema-John? Please Sign Up</Link>
          </small>
        </p>
      </form>
    </div>
  );
};

export default Login;
