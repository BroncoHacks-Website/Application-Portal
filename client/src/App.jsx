// import React, { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";

// page imports
import Signup from "./pages/Signup.jsx";
// import LogIn from './pages/Login.jsx'

// component imports
import Navbar from "./components/Navbar.jsx";

// import './App.css' <= this is bad

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" /* element={<Home />} */ />
          <Route path="/team" /* element={<Team />} */ />
          <Route path="/faq" /* element={<FAQ />} */ />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
