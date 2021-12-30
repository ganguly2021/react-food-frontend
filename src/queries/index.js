import { gql } from 'apollo-boost'

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