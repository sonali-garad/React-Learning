import { useState } from "react";

const AddButton = ({value}) =>
{
    const [show, setShow ] = useState(false)
    console.log("getting value frm add compo", value)
    
    const handleAdd=() =>
    {
        console.log("fun called");
    setShow((prev) => !prev);

    }
    return(
        <>
        <button
        onClick={handleAdd}
        >
            Add Button
        </button>
        
        {show &&
        <p> {value}</p>
        }
        </>

    )
}
export default AddButton;