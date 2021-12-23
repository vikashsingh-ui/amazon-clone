import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/");
        // ...
      })
      .catch((error) => {
        alert(error.massage);
      });
  };

  const register = (e) => {
    e.preventDefault();

    //from eirebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/");
        // ...
      })
      .catch((error) => {
        alert(error.massage);
        // ..
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1020px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Sign in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            placeholder="Enter your Email@gmail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />
          <h5>Password</h5>
          <input
            placeholder="Enter Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
          />
          <button onClick={login} type="submit" className="login_signin">
            Sign in
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Condition of Use & Sale . Please
          see my name is vikash kumar singh and i am building this project just
          for practice.
        </p>
        <button onClick={register} className="login_register">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
