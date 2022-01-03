import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { ADD_RECIPE } from './../../queries'
import { useNavigate } from 'react-router-dom'

function AddRecipe({ session }) {

  const navigate = useNavigate()

  const schema = {
    name: '',
    description: '',
    instructions: '',
    username: session.getCurrentUser.username,
    category: ''
  }

  const [formData, setFormData] = useState(schema)

  // handle form input change
  const handleInputChange = (e) => {
    e.preventDefault()

    const name = e.target.name
    const value = e.target.value

    // create updated form data
    const newData = {
      ...formData,
      [name]: value
    }

    // set form data
    setFormData({ ...newData })
  }

  // handle form submit
  const handleSubmit = (e, addRecipe) => {
    e.preventDefault()

    // call the graphql mutation function
    addRecipe().then(({ data }) => {
      //clear form fields
      setFormData({ ...schema })

      // redirect to home page
      navigate('/')
    }).catch(error => {
      //clear form fields
      setFormData({ ...schema })
    })
  }

  // handle form validation
  const validateForm = () => {
    const isInvalid = (
      !formData.username ||
      !formData.name ||
      !formData.description ||
      !formData.category ||
      !formData.instructions
    )

    return isInvalid
  }

  return (
    <div className='App'>
      <h1 className='App'>Add Recipe</h1>
      <Mutation mutation={ADD_RECIPE} variables={{ ...formData }}>
        {
          (addRecipe, { data, loading, error }) => {
            return (
              <form className='form' onSubmit={(e) => handleSubmit(e, addRecipe)}>
                <input
                  type="text"
                  name="name"
                  placeholder='Recipe Name'
                  className=''
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <select name="category" onChange={handleInputChange}>
                  <option value="Breakfast">Breakfast</option>
                  <option value="Lunch">Lunch</option>
                  <option value="Dinner">Dinner</option>
                  <option value="Snack">Snack</option>
                </select>
                <input
                  type="text"
                  name="description"
                  placeholder='Description'
                  className=''
                  value={formData.description}
                  onChange={handleInputChange}
                />
                <textarea
                  name="instructions"
                  placeholder='Add Instructions'
                  value={formData.instructions}
                  onChange={handleInputChange}
                ></textarea>
                <button
                  type="submit"
                  className='button-primary'
                  disabled={loading || validateForm() ? true : false}
                >Add</button>
              </form>
            )
          }
        }
      </Mutation>
    </div>
  )
}

export default AddRecipe
