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
import withSession from './hoc/withSession';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Recipe/Search';
import AddRecipe from './components/Recipe/AddRecipe';
import Profile from './components/Profile/Profile';
import RecipePage from './components/Recipe/RecipePage';

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

const Root = ({ refetch, session }) => {
  return (
    <Router>
      <Navbar session={session} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signin" element={<Signin refetch={refetch} />} />
        <Route path="/signup" element={<Signup refetch={refetch} />} />
        <Route path="/search" element={<Search refetch={refetch} />} />
        <Route path="/recipe/add" element={<AddRecipe session={session} />} />
        <Route path="/recipe/:_id" element={<RecipePage session={session} />} />
        <Route path="/profile" element={<Profile session={session} />} />
      </Routes>
    </Router>
  )
}

const RootWithSession = withSession(Root)

ReactDOM.render(
  <ApolloProvider client={graphqlClient}>
    <React.StrictMode>
      <RootWithSession />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);