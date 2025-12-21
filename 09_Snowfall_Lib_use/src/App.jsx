import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Snowfall from 'react-snowfall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ height: "10vh", width: "80vh"}}>
    <Snowfall 
    color='#FFFAFA'
    snowflakeCount={400}
    radius={[5,0]}
    wind={[1,4]}
    />
    <h1 style={{background: "beige", color:"black"}}> Let it snow</h1>
    </div>
    </>
  )
}

export default App
