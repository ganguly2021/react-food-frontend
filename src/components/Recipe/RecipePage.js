import React from 'react'
import { useParams } from 'react-router-dom'
import { Query } from 'react-apollo'
import { GET_RECIPE } from './../../queries'

function RecipePage() {
  const params = useParams()
  console.log(params)

  return (
    <Query query={GET_RECIPE} variables={{ id: params._id }}>
      {
        ({ data, loading, error }) => {

          if (loading) {
            return (
              <p>Loading...</p>
            )
          } else {
            if (!error) {
              return (
                <p>Name: {data.getRecipe.name}</p>
              )
            } else {
              return (
                <p>Some error occured.</p>
              )
            }
          }
        }
      }
    </Query>
  )
}

export default RecipePage
