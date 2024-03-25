import { useState } from 'react'
import SignupPage from './pages/Signup.jsx'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup.jsx'
import LogIn from './pages/Login.jsx'
import './App.css'
import Login from './components/login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Routes>
          <Route path="/" element={<Signup />} /> // Replace path with "/signup" after home page is created.
          <Route path="/login" element={<LogIn />} />
        </Routes> */}
        <Login></Login>
      </div>
    </>
  )
}

export default App;