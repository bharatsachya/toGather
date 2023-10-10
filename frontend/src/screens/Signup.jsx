import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    type: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const { name, email, password, location, type } = credentials;
    if (!name || !email || !password || !location) {
      alert("Please fill in the form completely");
    } else {
      if (type === "user") {
        axios
          .post("http://localhost:5000/createuser", {
            name,
            email,
            password,
            location,
            type,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      } else if (type == "ngo") {
        axios
          .post("http://localhost:5000/createngo", {
            name,
            email,
            password,
            location,
            type,
          })
          .then((result) => {
            console.log(result);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    setCredentials({
      name: "",
      email: "",
      password: "",
      location: "",
      type: "",
    });
    console.log(credentials);
  }

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={credentials.email}
              onChange={onChange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
              value={credentials.password}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="Address"
              name="location"
              value={credentials.location}
              onChange={onChange}
            />
          </div>
          <fieldset>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                User
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="user"
                value="user"
                id="flexRadioDefault1"
                onChange={(event) => {
                  setCredentials({ ...credentials, type: event.target.value });
                }}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                NGO
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                value="ngo"
                id="flexRadioDefault2"
                onChange={(event) => {
                  setCredentials({ ...credentials, type: event.target.value });
                }}
              />
            </div>
          </fieldset>

          <button type="submit" className="m-3 btn btn-success">
            Submit
          </button>

          <Link to="/login" className="m-3 btn btn-danger">
            Already A User
          </Link>
        </form>
      </div>
    </>
  );
}
