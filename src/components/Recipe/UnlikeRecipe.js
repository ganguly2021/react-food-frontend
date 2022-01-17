import React from 'react'
import { Mutation } from 'react-apollo'
import { UNLIKE_RECIPE, GET_RECIPE } from './../../queries'

function UnlikeRecipe({ username, recipeID, refetchGetRecipe }) {


  // handle unlike recipe
  const handleUnlike = (unlikeRecipe) => {

    // unlike recipe
    unlikeRecipe().then(async recipe => {
      console.log(recipe)

      // refetch get recipe
      await refetchGetRecipe()

    }).catch(error => {
      console.log(error)
    })

  }

  return (
    <Mutation mutation={UNLIKE_RECIPE} variables={{
      username: username,
      recipeID: recipeID
    }}
      refetchQueries={
        () => [
          { query: GET_RECIPE, variables: { id: recipeID } }
        ]
      }
    >
      {
        (unlikeRecipe, { data, loading, error }) => {
          return username && (<button onClick={() => handleUnlike(unlikeRecipe)}>Unlike</button>)
        }
      }
    </Mutation>
  )
}

export default UnlikeRecipe
