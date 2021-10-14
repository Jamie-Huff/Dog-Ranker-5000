import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import generateDogsArray from "../helpers/generateDogsArray";
import selectedDogs from "../helpers/selectNumberOfDogs";
import CardList from "../components/cardList";
import Board from "../components/board";

function GetRequestHooks() {
  const [totalReactPackages, setTotalReactPackages] = useState(null);

  useEffect(() => {
      // GET request using axios inside useEffect React hook
      axios.get('https://dog.ceo/api/breeds/list/all')
          .then(response => 
            setTotalReactPackages(JSON.stringify(response.data.message))
            );

  // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  const dogsArray = generateDogsArray(JSON.parse(totalReactPackages))
  const dogsVals = selectedDogs(dogsArray)
  const cards1 = dogsVals[0].map((d, index) => <li key={d.name}>Rank #{d.rank}: {d.name}</li>)
  const cards2 = dogsVals[1].map((d, index) => <li key={d.name}>Rank #{d.rank}: {d.name}</li>)

  return (
    <main className={'flexbox'}>
    <Board id="board-1" className="board">
    <CardList
    cards={cards1}
    allCards={dogsVals}
    boardId='board-1'
    /> 
    </Board>
    <Board id="board-2" className="board">
    <CardList
    cards={cards2}
    allCards={dogsVals}
    boardId='board-2'
    />
    </Board>
  </main>
  );
}

export { GetRequestHooks }; 