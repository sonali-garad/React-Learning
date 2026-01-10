import "./App.css";
import { store } from "./redux/Store/Store";
import {
  increment,
  decrement,
  reset,
  randomAddition,
} from "./redux/Slices/CounterSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [localCount, setLocalCount] = useState(0);
  console.log("count", count);
  console.log("localCount", localCount);

  const incrementCount = () => {
    dispatch(increment());
  };

  const decrementCount = () => {
    dispatch(decrement());
  };

  const resetCount = () => {
    dispatch(reset());
  };

  const increaseCountBy = () => {
    dispatch(randomAddition(localCount));
  };

  return (
    <>
      <div className="container">
        <h1 id="header">Redux State Management</h1>

        <button className="button-con" onClick={incrementCount}>
          Increment
        </button>

        <button className="button-con" onClick={decrementCount}>
          {" "}
          Decrement
        </button>

        <button className="button-con" onClick={resetCount}>
          Reset
        </button>

        <h3>Count : {count}</h3>
        <button style={{ margin: "3px" }} onClick={increaseCountBy}>
          Increase Counter by
        </button>

        <input
          type="number"
          onChange={(e) => {
            setLocalCount(e.target.value);
          }}
          
        />
      </div>
    </>
  );
}

export default App;
