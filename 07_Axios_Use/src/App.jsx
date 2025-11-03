import axios from "axios"
import { useEffect, useState } from "react"
const App= () =>
{
  const [data, setData] = useState([]);

 //response.data ->  
// body :"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// id :1
// title :"sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
// userId :1
useEffect(()=>{
const getUserData = async () =>
{
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(response)
  }
  catch(e)
  {
    console.error("error in loding data ");
  }
}
getUserData();
},
[])
console.log("whole data ",data?.data)
console.log("response data",data?.data?.[0]?.id) //added optional chaining to prevent from code crashout cause at start we didn't have any value in the object without this chaining code would crash.

  return (
    <>
    <h1 style={{color:"blue", textAlign:"center"}}>SAMPLE USER DATA DISPLAY FROM API </h1>
    <h1 style ={{color: "red"}}> UserID : {data?.data?.[0]?.id}</h1>
    <h1 style={{color: "green"}}>Title: {data?.data?.[0]?.title}</h1>
    <h1 style= {{color: "violet"}}>Body: {data?.data?.[0]?.body}</h1>
    </>
    
  )
}
export default App