import { useState } from 'react'
import Login from './pages/login.jsx'
import Register from './pages/register.jsx';
import Home from './pages/home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
