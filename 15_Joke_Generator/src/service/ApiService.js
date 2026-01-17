import axios from "axios"
export const JokeApiCall= async()=>
{
    console.log("making api call")
    const response = await axios.get
    ("https://sv443.net/jokeapi/v2/joke/Programming?type=single");
    console.log("response", response);
    return response;
}