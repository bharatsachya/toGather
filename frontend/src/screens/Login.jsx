import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
    type: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = loginCredentials;

    if (!email || !password) {
      alert("Please fill in the form completely");
    } else {
      if (loginCredentials.type === "user") {
        axios
          .post("http://localhost:5000/loginuser", { email, password })
          .then((result) => {
            if (result.data.Success === "true") {
              navigate("/");
              localStorage.setItem(
                "currentUser",
                JSON.stringify(result.data.user)
              );
              console.log(JSON.parse(localStorage.getItem("currentUser")));
              localStorage.setItem("authToken", result.data.AuthToken);
              console.log(localStorage.getItem("authToken"));
            } else {
              alert("Register First");
            }
          });
      } else if (loginCredentials.type === "ngo") {
        axios
          .post("http://localhost:5000/loginngo", { email, password })
          .then((result) => {
            if (result.data.Success === "true") {
              navigate("/");
              localStorage.setItem(
                "currentNgo",
                JSON.stringify(result.data.ngo)
              );
              console.log(JSON.parse(localStorage.getItem("currentUser")));
              localStorage.setItem("authToken", result.data.AuthToken);
              console.log(localStorage.getItem("authToken"));
            } else {
              alert("Register First");
            }
          });
      }

      setLoginCredentials({
        email: "",
        password: "",
        type: "",
      });
    }
  }

  console.log(loginCredentials);

  function onChange(event) {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={loginCredentials.email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={loginCredentials.password}
              onChange={onChange}
            />
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="ngo"
              id="exampleRadios1"
              value="ngo"
              onChange={(event) => {
                setLoginCredentials({
                  ...loginCredentials,
                  type: event.target.value,
                });
              }}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              NGO
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="user"
              id="exampleRadios2"
              value="user"
              onChange={(event) => {
                setLoginCredentials({
                  ...loginCredentials,
                  type: event.target.value,
                });
              }}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              User
            </label>
          </div>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>

          <Link to="/signup" className="m-3 btn btn-danger">
            Have Not Registered
          </Link>
        </form>
      </div>
    </>
  );
}






