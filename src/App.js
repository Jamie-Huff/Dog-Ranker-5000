import React, { useState, useEffect } from "react";
import "./styles/main.css"
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import { GetRequestHooks } from "./hooks/useApplicationData";

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();
  const [dogBreeds, setDogBreeds] = useState(null)

  /*
  Time dependant theres alot more I wanted to do..
    1. values can't be dragged inbetween components, can only be appended to the end
          Solution: 

    2. values keep their identifier even after being moved to the other column
          Solution: Keep track of the state of all the dog breed cards.
            Use an index array to check if that specific key already exists in the array for example !cards1Array.includes(key)
            Give the new key the next available key slot

    3. Can't drag values from the right column to the left. But can drag from left -> right -> left
          Solution: Research
  */


  return (
    <div className="App">
      <div className={"top-head"}>
        <div>
          <h1 className={"top-head-text"}>Dog Ranker 5000</h1>
        </div>
      </div>

      <GetRequestHooks />
    </div>

  );
}

export default App;