import React from 'react'

function Card(props) {
  const dragStart = e => {
    const target = e.target;
    console.log(e)
    e.dataTransfer.setData('card_id', target.id);
    e.dataTransfer.setData('board_id', target.id)
  }

  const dragOver = e => {
    e.stopPropagation();
  }
  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  )
}

export default Card
