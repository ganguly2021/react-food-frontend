import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'

const graphqlClient = new ApolloClient({
  uri: "http://localhost:4000/graphql"
})

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);