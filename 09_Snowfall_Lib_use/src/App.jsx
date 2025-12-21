import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Snowfall from 'react-snowfall'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const[snow, setSnow] = useState(false)

  return (
    
    <>
    <div style={{ height: "10vh", width: "80vh"}}>
      {/* we are rendering the snow when snow state is true only - else we are not showing snow on screen  */}
      {snow &&(
    < Snowfall 
    color='#FFFAFA'
    snowflakeCount={400}
    radius={[5,0]}
    wind={[1,4]}

    />
      )}
    <h1 style={{background: "beige", color:"black"}}> Let it snow</h1>
    <div >
    <button 
    style={{background:"white", width: "140px", height:"40px", color:"black"}}
    onClick={() => {setSnow(true)}}
    > Start Snow  </button>

   <button 
      style={{background:"white", width: "140px", height:"40px", margin: "10px", color:"black"}}
    text="hi"
    onClick={()=> {setSnow(false)}}
 >
  Stop Snow 
 </button>

    </div>
    </div>
    </>
  )
}

export default App
