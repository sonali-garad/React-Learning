import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Landing from './Landing';
import Home from './Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <BrowserRouter>
  <Routes>
<Route path ="/" element={<Landing/>} />
<Route path ="/home" element={<Home/>}/>

  </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
