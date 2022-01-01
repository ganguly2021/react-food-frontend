import { gql } from 'apollo-boost'

/* Recipe Queries Start */
export const GET_ALL_RECIPES = gql`
  query{
    getAllRecipes {
      name
      instructions
      description
      category
      likes
      createdDate
    }
  }
`

/* Recipe Queries Ends */

/* Recipe Mutation Starts */


/* Recipe Mutation Ends */

/* ---------------------- */

/* User Queries Start */

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
