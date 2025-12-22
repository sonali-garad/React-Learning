import { useNavigate } from "react-router-dom"

function Home ()
{
    const navigate = useNavigate()
    return (
            <>
                <h1>This is route for home </h1>

                <button 
                onClick={()=>{navigate("/")}}
                >
                    Go to Home page
                </button>
            </>
        
    )
}
export default Home