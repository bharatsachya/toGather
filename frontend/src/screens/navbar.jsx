import React, { useState , useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import "../style/navbar.css"
import toast from "react-hot-toast";

export default function Navbar() {

  const navigate = useNavigate()

  const [loggedin, setLoggedin] = useState(true)
  const [scrolled, setScrolled] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setLoggedin(false)
    toast.success("logged out successfully")
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar fixed-top p-1 navbar-expand-lg ${scrolled?"navbar-scrolled":""}`}>
        <div className="container-fluid d-flex justify-content-between mx-5 p-0">

          <div className="nav-left d-flex align-items-center justify-content-center">
            <Link className="navbar-logo" to="/"><img className="logo" src="logo.png" /></Link>
            <Link className={`ngo-name ${scrolled?"text-scrolled":""}`} to="/">Together</Link>
          </div>

          <div className="nav-right">
            <div className="collapse navbar-collapse d-flex flex-column" id="navbarSupportedContent">

              <div className="nav-right-top d-flex flex-row">
                <form className="d-flex m-3" role="search">
                  <input className="form-control search-btn me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className={`btn custom-btn ${scrolled?"button-scrolled":""} `} type="submit">Search</button>
                </form>
                <Link to="/ngo"><button className={`btn custom-btn ${scrolled?"button-scrolled":""} my-3`} type="submit">Make a difference</button></Link>
              </div>

              <div className="nav-right-bottom d-flex justify-content-evenly align-items-center">
                <div className="dropdown ms-5">
                  <button className={`btn dropdown-toggle ${scrolled?"text-scrolled text-white":""} `} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Account
                  </button>

                  {/* checking if user is logged in or not */}
                  {localStorage.getItem("authToken") ? (<ul className="dropdown-menu"> <li><button type="button" onClick={handleLogout} className="btn btn acc-buttons m-2">
                    Logout
                  </button></li></ul>)
                     :
                    (<ul className="dropdown-menu">
                      <div className="d-flex flex-column align-items-center justify-content-center">
                      <button type="button" className="btn acc-buttons m-2" data-bs-toggle="modal" data-bs-target="#signup">
                        Signup
                      </button>
                      <button type="button" className="btn acc-buttons mx-2 mb-2" data-bs-toggle="modal" data-bs-target="#login">
                        Login
                      </button>
                      </div>
                    </ul>
                    )
                  }
                </div>

                <div className="nav-item ms-5">
                  <Link className={`nav-link ${scrolled?"text-scrolled":""} `} to="/whoweare">Who we are</Link>
                </div>
                <div className="nav-item ms-5">
                  <Link className={`nav-link ${scrolled?"text-scrolled":""} `} to="/achievements">Achievements</Link>
                </div>
                <div className="nav-item ms-5">
                  <Link className={`nav-link ${scrolled?"text-scrolled":""} `} to="/discover">Discover</Link>
                </div>
                <div className="nav-item mx-5">
                  <Link className={`nav-link ${scrolled?"text-scrolled":""} `} to="/volunteer">Volunteer</Link>
                </div>

              </div>

            </div>
          </div>


        </div>
      </nav>

      {/* -------------------signup-modal--------------          */}

      <div className="modal fade" id="signup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Sign up</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <Signup />

            </div>
          </div>
        </div>
      </div>

      {/* -------------------login-modal--------------          */}


      <div className="modal fade" id="login" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>

          </div>
        </div>
      </div>

    </>
  )
}


