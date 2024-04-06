import {useState} from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Team from "./pages/Team.jsx";
import FAQ from "./pages/FAQ.jsx";
import Signup from "./pages/Signup.jsx";

import Navbar from "./components/Navbar.jsx";


function App() {
  // const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Navbar toggle={toggle} setToggle={setToggle}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
