const  Button = ({
    callApi,
})=>
{
    return (
        <>
        <button
        onClick={callApi}
        > 
        Click here to generate Joke
        </button>
        </>
    )
}
export default Button;