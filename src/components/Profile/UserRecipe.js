import React from 'react'
import { Query } from 'react-apollo'
import { GET_USER_RECIPES } from './../../queries'
import { Link } from 'react-router-dom'

function UserRecipe({ username }) {
  return (
    <Query query={GET_USER_RECIPES} variables={{ username: username }}>
      {
        ({ data, loading, error }) => {
          if (error) return <p>{error}</p>
          if (loading) return <p>Loading...</p>

          if (data) {
            return data.getUserRecipes.map((recipe, key) => {
              return (
                <li key={key}>
                  <Link to={`/recipe/${recipe._id}`}>
                    <p>{recipe.name}</p>
                  </Link>
                </li>
              )
            })
          } else {
            return (!data.getUserRecipes.length && <p>You dont have any favourites. Go add some !</p>)
          }

        }
      }
    </Query>
  )
}

export default UserRecipe
