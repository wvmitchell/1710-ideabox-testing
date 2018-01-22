import React from 'react'

const Card = ({title, body, id, removeIdea}) => {
  return(
    <article>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => removeIdea(id)}> remove me </button>
    </article>
  )
}

export default Card
