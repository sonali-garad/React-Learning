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
    console.log(response)
  }
  catch(e)
  {
    console.error("error in loding data ");
  }
}
getUserData();
},
[])


  return (
    <h1> hello </h1>
  )
}
export default App