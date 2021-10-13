import React, { useState } from "react";
import useApplicationData from "./hooks/useApplicationData";
import "./styles/main.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";
import Board from "./components/board";
import Card from "./components/card";
import CardList from "./components/cardList";
import generateDogsArray from "./helpers/generateDogsArray";
import selectNumberOfDogs from "./helpers/selectNumberOfDogs";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const dogBreedList = [
  {
    id: 'dog1',
    name: 'Dobberman',
  },
  {
    id: 'dog2',
    name: 'Corgi',
  },
  {
    id: 'dog3',
    name: 'Pug',
  },
  {
    id: 'dog4',
    name: 'Pepsi Dog',
  },
  {
    id: 'dog5',
    name: 'Whippet',
  }
]

function App() {
  const [dogBreeds, updateDogBreeds] = useState(dogBreedList);
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  // let { dogBreeds } = useApplicationData();
  // const dogsArray = generateDogsArray(dogBreeds);
  // const cards1 = selectNumberOfDogs(dogsArray)[0]
  // const cards2 = selectNumberOfDogs(dogsArray)[1]
  // console.log(cards1)

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(dogBreeds);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateDogBreeds(items);
  }

  return (
    <div className="App">
      <div className={"top-head"}>
        <div>
          <h1 className={"top-head-text"}>Dog Ranker 5000</h1>
        </div>
      </div>

      <h1> Counter {counter}</h1>
      <button onClick={() => dispatch(increment(1))}> Add 1 + </button>
      <button onClick={() => dispatch(increment(5))}> Add 5 + </button>
      <button onClick={() => dispatch(decrement())}>-</button>

    <div className="flex-container">
      <div className="App-header">
          <h1>Dog Breeds 1</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="dogBreeds" {...provided.droppableProps} ref={provided.innerRef}>
                  {dogBreeds.map(({id, name}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <p>
                              { name }
                            </p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
            </DragDropContext>
        </div>

        <div className="App-header">
          <h1>Dog Breeds 1</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
              {(provided) => (
                <ul className="dogBreeds" {...provided.droppableProps} ref={provided.innerRef}>
                  {dogBreeds.map(({id, name}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <p>
                              { name }
                            </p>
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
            </DragDropContext>
        </div>
      </div>


      <main className={"flexbox"}>
        <div> </div>
        <Board id="board-1" className="board">
          <CardList cards={[]} />
        </Board>
        <Board id="board-2" className="board">
          <CardList cards={[]} />
        </Board>
      </main>
      <div></div>
    </div>
  );
}

export default App;
