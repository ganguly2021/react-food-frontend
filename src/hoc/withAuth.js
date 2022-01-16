import React from 'react'
import { Query } from 'react-apollo'
import { Navigate } from 'react-router-dom'
import { GET_CURRENT_USER } from './../queries'

const withAuth = conditionFunc => Component => props => {

  return (
    <Query query={GET_CURRENT_USER}>
      {
        ({ data, loading, error }) => {
          if (loading) return null

          if (conditionFunc(data)) {
            return <Component {...props} />
          } else {
            // redirect to home page
            return <Navigate replace to="/" />
          }
        }
      }
    </Query>
  )
}

export default withAuth
