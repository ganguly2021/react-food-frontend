import React from 'react'
import { Link } from 'react-router-dom'

function RecipeItem({ _id, name, category }) {

  return (
    <li>
      <Link to={`/recipe/${_id}`}><h4>{name}</h4></Link>
      <p><b>{category}</b></p>
    </li>
  )
}

export default RecipeItem
