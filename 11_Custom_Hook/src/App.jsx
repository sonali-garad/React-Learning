import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./Hooks/CounterHook";

function App() {
  const { count, increment, decrement, reset } = useCounter(1);

  return (
    <>
      {/* {(()=>
  {
    if(count>3 )
    {
      console.log("inside in if for validation")
      startCounter(10)
    }
  })()} 
   
   /*During initial renders, only one hook is executed because the condition is false.
When the condition becomes true, an additional hook is executed during render.
This changes the number and order of hooks between renders, which React does not allow.
Therefore, hooks must always be defined unconditionally at the top level of the component.

so if i put condition it will be wrong 

Question - 
Does render mean DOM update?
Ans - No. Render does not mean DOM update. Render means React calculating what the UI should look like.
After render, React compares the new output with the previous one and updates the DOM only where changes are needed.
*/}
      <h2>{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
