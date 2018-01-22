import React from 'react'
import Card from '../Card/Card'
const CardContainer = ({ ideas, removeIdea }) => {
  const renderedCards = ideas.map((idea) =>
        <Card {...idea}
              removeIdea={removeIdea}
              key={idea.id}/>)
  return (
    <div>
      {renderedCards}
    </div>
  )
}

export default CardContainer
