import React from 'react'
import { Link } from 'react-router-dom'

function SearchItem({ _id, name, likes }) {
  return (
    <li>
      <Link to={`/recipe/${_id}`}>
        <h4>{name}</h4>
      </Link>
      <p>Likes: {likes}</p>
    </li>
  )
}

export default SearchItem
