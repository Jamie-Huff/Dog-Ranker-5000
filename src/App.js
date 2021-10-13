import React from "react";
import useApplicationData from "./hooks/useApplicationData";
import "./styles/main.css"
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { increment, decrement } from "./actions";
import Board from "./components/board";
import Card from "./components/card";
import CardList from "./components/cardList";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  let { dogBreeds } = useApplicationData()
  function waitForDogBreeds(){
    if (typeof dogBreeds === null) {
      setTimeout(waitForDogBreeds(), 250)
    }
  }
  const dogObj = dogBreeds
  console.log(dogBreeds)
  
  const cards = [1, 2, 3, 4, 5]
  /* Goals:
    1. Create a page with two tables side by side in the center of the page
    2. Fill each row with 10 unique breeds from the api, rank them in order
      - All breeds must be unique, none of the 20 breeds can be the same
      - Breeds should be new on each refresh
    3. Table state must be implemented using react
  */
  return (
    <div className="App">
      <div className={"top-head"}>
        <img src="/images/spg-head.png" className={"top-bar-logo"}></img>
        <div>
          <h1 className={"top-head-text"}>Dog Ranker 5000</h1>
        </div>
      </div>

      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}> Add 1 + </button>
      <button onClick={() => dispatch(increment(5))}> Add 5 + </button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <main className={'flexbox'}>
        <Board id="board-1" className="board">
        <CardList
        cards={cards}
        /> 
        </Board>
        <Board id="board-2" className="board">
          <Card id="card-2" className="card" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
      </main>
      <div>


      </div>
    </div>

  );
}

export default App;
