import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import Navbar from "./screens/navbar";
import Home from "./screens/home";
import Ngo from "./screens/ngo";
import Discover from "./screens/discover";
import Whoweare from "./screens/whoweare";
import Volunteer from "./screens/volunteer";

function App() {
  return (
    <Router>

      <Navbar/> 

      <Routes>
        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/ngo" element={<Ngo/>}/>
        <Route exact path ="/discover" element={<Discover/>}/>
        <Route exact path ="/whoweare" element={<Whoweare/>}/>
        <Route exact path ="/volunteer" element={<Volunteer/>}/>
      </Routes>
      <Toaster></Toaster>
    </Router>
  );
}

export default App;
