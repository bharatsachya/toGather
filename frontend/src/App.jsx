import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import NgoPage1 from './screens/ngo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ngo" element={<NgoPage1/>}/>
      </Routes>
    </Router>
  );
}

export default App;
