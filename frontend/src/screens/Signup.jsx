import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Signup() {
  const navigate = useNavigate()
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
          toast.success("details submitted successfully")
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
          toast.success("details submitted successfully")
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
        <form onSubmit={handleSubmit} class='signup-form'>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              placeholder="name"
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
              placeholder="someone@gmail.com"
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
              placeholder="Always use a strong password"
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
              placeholder="Your complete address"
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
                name="type"
                value="user"
                id="type"
                defaultChecked ={credentials.value ==="user"}
                onChange={onChange}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                NGO
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="type"
                value="ngo"
                id="flexRadioDefault2"
                defaultChecked={ credentials.value === "ngo"}
                onChange={onChange}
              />
            </div>
          </fieldset>
          <button type="submit" className="m-3 btn btn-success" data-bs-dismiss="modal">
            submit
          </button>

        </form>
      </div>
    </>
  );
}
