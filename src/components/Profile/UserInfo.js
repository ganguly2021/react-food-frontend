import React from 'react'
import { Link } from 'react-router-dom'
import UserRecipe from './UserRecipe'

function UserInfo({ session }) {

  const formatDate = (date) => {
    const newDate = new Date(date).toLocaleDateString('en-IN')
    const newTime = new Date(date).toLocaleTimeString('en-IN')
    return (`${newDate} at ${newTime}`)
  }
  return (
    <div>
      <h3>User Info</h3>
      <p>Username: {session.getCurrentUser.username}</p>
      <p>Email: {session.getCurrentUser.email}</p>
      <p>Join Date: {formatDate(Number(session.getCurrentUser.joinDate))}</p>
      <ul>
        <h3>{session.getCurrentUser.username}'s favourites.</h3>
        <UserRecipe username={session.getCurrentUser.username} />
        {/* {
          session.getCurrentUser.favourites.map(recipe => {
            return (
              <li key={recipe._id}>
                <Link to={`/recipe/${recipe._id}`}>
                  <p>{recipe.name}</p>
                </Link>
              </li>
            )
          })
        }
        {
          (!session.getCurrentUser.favourites.length && <p>You dont have any favourites. Go add some !</p>)
        } */}
      </ul>
    </div>
  )
}

export default UserInfo
