import React, { useEffect, useState } from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_RECIPES } from './queries'
import './App.css'

import RecipeItem from './components/Recipe/RecipeItem'

const App = () => {

  useEffect(() => {
    console.log("I am loaded again.")
  }, [])

  return (
    <div className='App'>
      <h1>Home</h1>
      <Query query={GET_ALL_RECIPES}>
        {
          ({ data, loading, error }) => {
            if (loading) {
              return <h3>Loading...</h3>
            }

            if (error) {
              return <h3>Some error occur.</h3>
            }

            return (
              <ul>{data.getAllRecipes.map(recipe => <RecipeItem key={recipe._id} {...recipe} />)}</ul>
            )
          }
        }
      </Query>
    </div>
  )
}

export default App;
