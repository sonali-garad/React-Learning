const  Button = ({
    callApi,
})=>
{
    return (
        <>
        <button className="button"
        onClick={callApi}
        > 
        Click here to generate Joke
        </button>
        </>
    )
}
export default Button;