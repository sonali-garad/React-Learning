import { useState } from "react";
import AddButton from "./AddButton";
const UiPage=  () =>
{

    const [value , setValue] = useState()
    console.log("value is ", value)
    return (
        <>
        <input
        placeholder="add item ..."
        onChange={(e) =>
            
            {
                setValue(e.target.value);
            }
        }

        />
                <AddButton
                value = {value}
                />

        </>
    )
}
export default UiPage;