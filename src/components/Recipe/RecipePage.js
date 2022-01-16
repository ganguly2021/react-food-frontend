import React from 'react'
import { useParams } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_RECIPE } from './../../queries'
import LikeRecipe from './LikeRecipe'

function RecipePage() {
  // get URL params
  const params = useParams()

  return (
    <Query query={GET_RECIPE} variables={{ id: params._id }}>
      {
        ({ data, loading, error }) => {
          if ( loading ) return <h4>Loading...</h4>
          if ( error ) return <h4>Error</h4>
          
          return (
            <div className='App'>
              <h4>Name: {data.getRecipe.name}</h4>
              <p>Category: {data.getRecipe.category}</p>
              <p>Description: {data.getRecipe.description}</p>
              <p>Instructions: {data.getRecipe.instructions}</p>
              <p>Likes: {Number(data.getRecipe.likes)}</p>
              <p>Created By: {data.getRecipe.username}</p>
              <LikeRecipe recipeID={data.getRecipe._id} />
            </div>
          )
        }
      }
    </Query>
  )
}

export default RecipePage
