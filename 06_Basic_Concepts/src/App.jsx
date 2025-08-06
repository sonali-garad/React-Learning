import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const students = ['Sonali' , 'rick', 'john' , 'tylor'];

  const Students1 =[{name :"ryan" , email: "ryan@gmail.com", contact: "8990"},
    {name: "iyan" , email: "iyan@gmail.com", contact:"8239"}
  ]
  //Using Map
  students.map((item) =>{
    console.log(item)
  })

  //Using loop 
  for(let i =0; i<students.length ; i++)
  {
console.log(students[i]);
  }
//loops are not allowed in the return statement
  return(
<>
<h1>Handle array with List</h1>
 {/* {
  students.map((data)=>
<h4 >{data}</h4>
 )
} */}

{
  <table border= "1px" cellPadding="2px">
    <tr>
  <td>Name</td>
  <td>Email</td>
  <td> Contact</td>

    </tr>
  {
   
  Students1.map((item)=>
  <tr>
    <td>{item.name}</td>
  <td>{item.email}</td>
  <td>{item.contact}</td>
  </tr>
  )   
}
  </table>
}
</>
  )
}

export default App
