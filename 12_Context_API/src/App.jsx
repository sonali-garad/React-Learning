import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ChildA from "./components/ChildA"

  const UserContext = createContext();

function App() {

  //Step 1 : create Context 
  //step 2:  wrap all compo whom we want to send data in provider 
  // setp 3: consume data in compo where we want consume 
  const [name, setName] = useState({name:"sonali"})

  return (
    <>
    <UserContext.Provider value={name}>
      <ChildA/>
      </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}
