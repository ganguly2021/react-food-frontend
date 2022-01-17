import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'
// import {  } from './../../queries'
import withSession from './../../hoc/withSession'
import { LIKE_RECIPE, GET_RECIPE } from './../../queries'

function LikeRecipe({ session, recipeID, refetch }) {
  const [username, setUsername] = useState('')
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    if (session) {
      setUsername(session.getCurrentUser.username)
    }

    // check if user already liked the food
    const isMatch = session.getCurrentUser.favourites.findIndex(recipe => {
      return recipe._id === recipeID
    })

    if (isMatch !== -1) {
      setIsLiked(true)
    }

    //cleanup
    return () => {
      setUsername('')
      setIsLiked(false)
    }
  })

  // handle like button click
  const handleLike = (likeRecipe) => {

    likeRecipe().then(recipe => {
      // update liked state
      setIsLiked(true)

      // refetch GET_RECIPE
      refetch();
    }).catch(error => {
      console.log(error)
    })
  }

  // handle unlike recipe
  const handleUnlike = () => {
    console.log('Add unlike GraphQL mutation here.')
  }


  return (
    <Mutation mutation={LIKE_RECIPE} variables={{
      recipeID: recipeID,
      username: username
    }}
      refetchQueries={
        () => [
          { query: GET_RECIPE, variables: { id: recipeID } }
        ]
      }
    >

      {
        (likeRecipe, { data, error, loading }) => {

          // if user already liked the food
          if (isLiked) {
            return username && (<button onClick={() => handleUnlike()}>Unlike</button>)
          } else {
            return username && (<button onClick={() => handleLike(likeRecipe)}>Like</button>)
          }
        }
      }

    </Mutation>
  )
}

export default withSession(LikeRecipe)
