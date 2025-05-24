import { useCallback, useEffect, useRef, useState } from "react"

function App() {
const[length, setLength] = useState(8)
const[numberAllowed, setNumberAllowed]= useState(false)
const[charAllowed, setCharAllowed] = useState(false)
const [password , setPassword] = useState("")

//ref hook 
const passwordRef= useRef(null)

const passwordGenerator= useCallback(()=> {
let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
let pass = ""

if(numberAllowed)
{
  console.log("numberallowed is true now ")
  str+= "1234567890"
  console.log(str)
  console.log(str.length)
}
else
{
  console.log("number allowed false")
}
if(charAllowed)
  str+="!@#$%^&*()_+|"

for (let i =1 ; i<=length ; i++)
{
  let char = Math.floor(Math.random()*str.length+1)
  pass += str.charAt(char)
}
setPassword(pass)
console.log("generated password is ",pass);
},[length, numberAllowed, charAllowed])
 
useEffect(()=>
{
  passwordGenerator()
}
  ,[length, numberAllowed, charAllowed,setPassword])

  const copyPasswordToClipboard =()=>
  {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }
  return (
    <>
    <div className="flex justify-center items-center  w-400 h-100 text-orange-600 bg-gray-900"
    style={{backgroundColor:"10px solid green"}}
    >
      <div className="bg-gray-700 p-10 rounded-2xl" 
      // style={{backgroundColor:"gray"}}
      >
        <h1 className="mb-10 "> <b>Password Generator </b></h1>
        <div >
          <input type="text"
          placeholder="Password"
          className="border-2 rounded-br-lg  text-amber-50 w-max mb-3 text-2xl"
          value={password}
          readOnly
          ref={passwordRef}
        
          />
          <button className="bg-transparent text-black ml-3.5 rounded-b-sm"
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
    <div>

      <label>
    <input type="range" className="px-2 cursor-pointer"
    min={6}
    max={50}
    value={length}
    onChange={(e) => {setLength(e.target.value)}}
    />
  Length:({length})
    </label>

<label className="px-4">
    <input type="checkbox" 
    defaultChecked={numberAllowed}
   onClick={()=> {
    setNumberAllowed((prev) => !prev)
   }} 
    
    />
    Numbers
</label>

   <label>
    <input type="checkbox"
    onChange={()=>setCharAllowed((prev)=>!prev)}
      />
    Special Char
    </label>
    </div>
 </div>
        </div>
    </>
  )
}

export default App
