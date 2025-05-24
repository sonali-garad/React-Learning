import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-amber-100 mb-4'>Tailwind CSS</h1>
      <Card name="sonali" about="Currently working in the Academian company as the junior engineer"/>
      <br/>
      <Card/>
    </>
  )
}

export default App
