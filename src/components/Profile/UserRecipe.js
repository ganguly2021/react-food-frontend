import React from 'react'
import { Mutation, Query } from 'react-apollo'
import { GET_USER_RECIPES, DELETE_USER_RECIPE, GET_ALL_RECIPES, GET_CURRENT_USER } from './../../queries'
import { Link } from 'react-router-dom'

function UserRecipe({ username }) {

  // delete user recipe based on ID
  const handleDelete = async (deleteUserRecipe, refetch) => {

    const confirmDelete = window.confirm("Are you sure ? you want to delete recipe.")

    if (confirmDelete) {
      deleteUserRecipe()
        .then(recipe => {
          console.log(recipe)

          // refecth get user recipes
          refetch()
        }).catch(error => {

        })
    }

  }
  return (
    <Query query={GET_USER_RECIPES} variables={{ username: username }}>
      {
        ({ data, loading, error, refetch }) => {
          if (error) return <p>{error}</p>
          if (loading) return <p>Loading...</p>

          if (data) {
            return data.getUserRecipes.map((recipe, key) => {
              return (
                <li key={key}>
                  <Link to={`/recipe/${recipe._id}`}>
                    <p>{recipe.name}</p>
                  </Link>
                  <p style={{ marginBottom: '0' }}>Likes: {recipe.likes}</p>
                  <Mutation mutation={DELETE_USER_RECIPE} variables={{
                    id: recipe._id
                  }}
                    refetchQueries={
                      () => [
                        { query: GET_ALL_RECIPES },
                        { query: GET_CURRENT_USER }
                      ]
                    }
                  >
                    {
                      (deleteUserRecipe, { data, loading, error }) => {
                        if (error) return <p>{error}</p>
                        if (loading) return (<p>Deleting...</p>)

                        return (<button className='delete-button' onClick={() => handleDelete(deleteUserRecipe, refetch)}>X</button>)
                      }
                    }
                  </Mutation>
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
