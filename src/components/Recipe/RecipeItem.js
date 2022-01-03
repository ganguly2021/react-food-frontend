import React from 'react'

function RecipeItem({ name, category }) {
  return (
    <li>
      <h4>{name}</h4>
      <p><b>{category}</b></p>
    </li>
  )
}

export default RecipeItem
