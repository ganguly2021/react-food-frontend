import React, { useState } from 'react'
import { ApolloConsumer } from 'react-apollo'
import { SEARCH_RECIPES } from './../../queries'
import RecipeItem from './RecipeItem'

function Search() {

  const [data, setData] = useState([])

  const handleChange = ({ searchRecipes }) => {
    if (searchRecipes.length !== 0) {
      setData(searchRecipes)
    }
  }

  return (

    <ApolloConsumer>
      {
        (client) => {
          return (
            <div className='App'>
              <input type="text"
                placeholder='Search'
                onChange={async (e) => {
                  e.persist()

                  const { data } = await client.query({
                    query: SEARCH_RECIPES,
                    variables: { searchText: e.target.value }
                  })

                  handleChange(data)
                }}
              />
              <ul>
                {
                  data.length !== 0 && data.map(recipe => <RecipeItem {...recipe} key={recipe._id} />)
                }
              </ul>
            </div>
          )
        }
      }
    </ApolloConsumer>
  )
}

export default Search
