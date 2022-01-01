import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// import component
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';

const graphqlClient = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token')

    operation.setContext({
      headers: {
        authorization: token
      }
    })
  },
  onError: ({ networkError }) => {
    console.log('Network Error: ' + networkError)

    // if (networkError.statusCode === 401) {
    //   // clear token from localStorage
    //   localStorage.removeItem('token')
    // }
  }
});

const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  )
}

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <Root />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);