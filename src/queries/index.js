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

export const SEARCH_RECIPES = gql`
  query($searchText: String!){
    searchRecipes(
      searchText: $searchText
    ){
      name
      description
      username
      instructions
      category
      _id
      likes
    }
  }
`

export const GET_USER_RECIPES = gql`
  query($username: String!){
    getUserRecipes(username: $username){
      name
      description
      username
      instructions
      category
      _id
      likes
    }
  }
`

/* Recipe Queries Ends */

/* Recipe Mutation Starts */

export const ADD_RECIPE = gql`
  mutation(
    $name: String!, 
    $description: String!, 
    $category: String!, 
    $instructions: String!,
    $username: String!
  ) {
    addRecipe(
      name: $name,
      description: $description,
      category: $category,
      instructions: $instructions
      username: $username
    ) {
      name
      description
      instructions
    }
  }
`

export const DELETE_USER_RECIPE = gql`
  mutation($id: ID!){
    deleteUserRecipe(id: $id){
      name
      likes
      instructions
    }
  }
`
export const LIKE_RECIPE = gql`
  mutation($recipeID: ID!, $username: String!){
    likeRecipe(
      recipeID: $recipeID,
      username: $username
    ){
      name
      likes
    }
  }
`

/* Recipe Mutation Ends */

/* ---------------------- */

/* User Queries Start */

export const GET_CURRENT_USER = gql`
  query{
    getCurrentUser {
      username
      email
      _id
      joinDate
      favourites {
        _id
        name
      }
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
