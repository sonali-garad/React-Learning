import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color , setColor] =useState("olive")
  return (
    <>
    <h1 className='text-center'>Background changer</h1>
    <div className="w-400 h-screen"
    style={{backgroundColor:color}}
    >
      <div className='fixed bottom-12 flex flex-wrap justify-center inset-x-0'>
    <div className='flex flex-wrap gap-10 shadow-lg justify-center px-3 py-2 bg-white ronded-xl'>
<button className='outline-none text-white' 
style={{backgroundColor:"red"}}
onClick={()=> setColor("red")}
> Red</button>

<button className='outline-none text-white' 
style={{backgroundColor:"green"}}
onClick={()=> setColor("green")}
> Green</button>

<button className='outline-none text-black' 
style={{backgroundColor:"Yellow"}}
onClick={()=> setColor("yellow")}
> Yellow</button>

<button className='outline-none' 
style={{backgroundColor:"pink"}}
onClick={()=> setColor("pink")}
> Pink</button>

<button className='outline-none text-white' 
style={{backgroundColor:"purple"}}
onClick={()=> setColor("purple")}
> Purlple</button>

<button className='outline-none text-white' 
style={{backgroundColor:"Orange"}}
onClick={()=>setColor("Orange")}
> Orange</button>

<button className='outline-none text-white' 
style={{backgroundColor:"brown"}}
onClick={()=> setColor("Brown")}
> Brown</button>
 </div>
      </div>
    </div>
    </>
  )
}

export default App
