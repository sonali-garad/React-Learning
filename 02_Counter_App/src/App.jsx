import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter , setCounter] =useState(0)

const addvalue= () =>
{
  setCounter(counter++);
}

let removeValue=() =>
{
  if(counter <=0 )
  {
    alert("Value cannot be decreased than 0 ")
  }
  setCounter(counter--)
}
 return (
    <>
     <h1> Counter Application </h1>
      <h2>Value : {counter} </h2>
     <button onClick={addvalue}> Add Value </button>
     <button onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
