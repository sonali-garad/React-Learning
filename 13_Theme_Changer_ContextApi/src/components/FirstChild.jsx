import SecondChild from "./secondChild";
const FirstChild = ({style})=>
{
    return (
       <>
       <div style={style}>
        <SecondChild/>
        </div>
        </>
      
    )   
}
export default FirstChild;