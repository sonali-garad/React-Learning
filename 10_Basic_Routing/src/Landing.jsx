import { useNavigate } from "react-router-dom"

function Landing()
{
    const Navigate = useNavigate();
    return (
        <>
        <h1> Welcome to the home page</h1>
        <button
        onClick={()=> {
            Navigate("/home")
        }}
        >Home route</button>
        </>
    )
}
export default Landing