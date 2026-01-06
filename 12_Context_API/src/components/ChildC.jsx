import {UserContext} from "../App"
import { useContext } from "react";
const ChildC = () =>
{
    const context = useContext(UserContext)
    console.log(context)
    return (
        <>
        <p>Name is : {context.name}</p>
        </>
    )
}
export default ChildC;