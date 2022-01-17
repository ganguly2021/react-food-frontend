import { gql } from 'apollo-boost'

export const recipeFragments = {
  recipe: gql`
    fragment CompleteRecipe on Recipe {
      _id
      name
      category
      instructions
      description
      likes
      username
    }
  `,
  like: gql`
    fragment LikeRecipe on Recipe {
      name
      likes
    }
  `
}