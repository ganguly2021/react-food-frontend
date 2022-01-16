import React, { useState, useEffect } from 'react'
import { Mutation } from 'react-apollo'
// import {  } from './../../queries'
import withSession from './../../hoc/withSession'
import { LIKE_RECIPE, GET_RECIPE } from './../../queries'

function LikeRecipe({ session, recipeID }) {
  const [username, setUsername] = useState('')
  
  useEffect(() => {
    if (session) {
      setUsername(session.getCurrentUser.username)
    }

    //cleanup
    return () => {
      setUsername('')
    }
  })

  // handle like button click
  const handleLike = (likeRecipe) => {
    likeRecipe().then(recipe => {
      console.log(recipe);
    }).catch(error => {

    })
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
          return username && (<button onClick={() => handleLike(likeRecipe)}>Like</button>)
        }
      }

    </Mutation>
  )
}

export default withSession(LikeRecipe)
