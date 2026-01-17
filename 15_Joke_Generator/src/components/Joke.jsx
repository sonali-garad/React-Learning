import React, { useEffect, useState } from "react";
import Button from "./Button";
import { JokeApiCall } from "../service/ApiService";
const Joke = ()=>
{
const[joke , setJoke] = useState("")


const callApi = async()=>{

    const data = await JokeApiCall();
    console.log("data is ",data);
    setJoke(data.data.joke)

}
console.log("joke state data ", joke)
    return(
        <>
        <h1>Joke Generator</h1>
        <h3>Here is Randome joke generator</h3>
        <Button
        callApi = {callApi}
        />
        <div>
        {/* Joke will be displayed here */}
        <p> {joke} </p>

        </div>
        </>
    )
}
export default Joke;