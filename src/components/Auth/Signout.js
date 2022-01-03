import React from 'react'
import { ApolloConsumer } from 'react-apollo'
import { useNavigate } from 'react-router-dom'

function Signout() {
  let navigate = useNavigate()

  const handleSignout = (client) => {

    // clear jwt token
    localStorage.setItem('token', '')

    client.clearStore().then(() => {
      client.resetStore()
      // redirect to home page
      navigate('/')
    })

  }


  return (
    <ApolloConsumer>
      {
        (client) => {
          return (
            <button onClick={() => handleSignout(client)}>
              Signout
            </button>
          )
        }
      }
    </ApolloConsumer>

  )
}

export default Signout
