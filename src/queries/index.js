import { gql } from 'apollo-boost'

/* Recipe Queries Start */
export const GET_ALL_RECIPES = gql`
  query{
    getAllRecipes {
      _id
      name
      category
    }
  }
`

export const GET_RECIPE = gql`
  query($id: ID!){
    getRecipe(_id: $id) {
      _id
      name
      category
      instructions
      description
      likes
      username
    }
  }
`

/* Recipe Queries Ends */

/* Recipe Mutation Starts */


/* Recipe Mutation Ends */

/* ---------------------- */

/* User Queries Start */

export const GET_CURRENT_USER = gql`
  query{
    getCurrentUser {
      username
      email
      _id
    }
  }
`

/* User Queries Ends */

/* User Mutation Starts */
export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(
      username: $username,
      email: $email,
      password: $password,
    ) {
      token
    }
  }
`

export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(
      username: $username,
      password: $password
    ) {
      token
    }
  }
`


/* User Mutation Ends */
