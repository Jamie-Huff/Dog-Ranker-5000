import React from 'react'

function Board(props) {
  const drop = e => {
    e.preventDefault();
    
    const card_id = e.dataTransfer.getData('card_id');
    const board_id = e.dataTransfer.getData('board_id');

    const card = document.getElementById(card_id);

    let allCards = props.children.props.allCards

    let cardsToAppend = ''

    if (e.target.id === 'board-1') {
      cardsToAppend = allCards[0]
    } else if (e.target.id === 'board-2') {
      cardsToAppend = allCards[1]
    }


    console.log('cards to add to:', cardsToAppend)


    console.log()
    card.style.display = 'block'; 

    e.target.appendChild(card)

  }

  const dragOver = e => {
    e.preventDefault();
  }

  return (
    <div 
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
      className={props.className}
    >
      { props.children }
    </div>
  )
}

export default Board

