import { use, useState } from "react";
import AddButton from "./AddButton";
const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleAdd = (e) => {
    setTodos((prev) => {
      // console.log("prev",prev)
      return [...prev, value];
    });
    setValue(""); //clear input
  };
  console.log("todos", todos);
  return (
    <>
      <div>
        <h1> To Do Application</h1>
        <input
          placeholder="Add item.."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <AddButton onAdd={handleAdd} todos={todos} />
      </div>
    </>
  );
};
export default Todo;
