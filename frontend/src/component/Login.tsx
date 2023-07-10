import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginWithRedirect, loginWithPopup } = useAuth0();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    // try {
    //   const response = await axios.post("http://localhost:3001/api/login", {
    //     email,
    //     password,
    //   });

    //   if (response.data.success) {
    //     loginWithRedirect();
    //   } else {
    //     // Handle invalid login
    //   }
    // } catch (error) {
    //   // Handle error
    // }
    loginWithPopup();
  };

  // return (
  //   <form onSubmit={handleLogin}>
  //     <input
  //       type="text"
  //       placeholder="Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     />
  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     />
  //     <button type="submit">Login</button>
  //   </form>
  // );
  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email Address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <div className="mt-1">
                <input type="checkbox" className="m-1" id="checkBox1" />
                <label htmlFor="checkBox1">Remember me</label>
              </div>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
