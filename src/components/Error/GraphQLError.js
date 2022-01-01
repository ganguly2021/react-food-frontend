import React from 'react'

function GraphQLError({ error }) {
  return <p>{error.message}</p>
}

export default GraphQLError
