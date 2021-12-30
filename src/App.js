import React from 'react'
import { Query } from 'react-apollo'
import { GET_ALL_RECIPES } from './queries'

const App = () => {
  return (
    <div>
      <h1>Home</h1>
      <Query query={GET_ALL_RECIPES}>
        {
          ({ data, loading, error }) => {
            if (loading){
              return <h3>Loading...</h3>
            }

            if (error){
              return <h3>Some error occur.</h3>
            }

            return (
              <p>Query It.</p>
            )
          }
        }
      </Query>
    </div>
  )
}

export default App;
