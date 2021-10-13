import React from 'react'
import Card from './card'

export default function CardList(props) {

  const cardMapper = props.cards.map((card, index) => {
    return (
      <Card
        id={"card-" + index + 1} 
        className="card" 
        draggable="true"
      >
        <p>{card}</p>
      </Card> 
    )
  })
  
    return (
      <div>
        {cardMapper}
      </div>
    )
}