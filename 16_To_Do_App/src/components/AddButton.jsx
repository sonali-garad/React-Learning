import { useState } from "react";

const AddButton = ({ onAdd, todos }) => {
  return (
    <>
      <div>
        <button onClick={onAdd}>Add</button>
      </div>

      <div>
        {todos.map((item, index) => {
          console.log("rendering ", item);
          return <p key={index}>{item}</p>;
        })}
      </div>
    </>
  );
};
export default AddButton;
