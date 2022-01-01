import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import GraphQLError from '../Error/GraphQLError'
import { SIGNIN_USER } from './../../queries'

function Signin() {
  const schema = {
    username: '',
    password: ''
  }

  const [formData, setFormData] = useState({ ...schema })


  // input change event handler
  const handleInputChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    let newData = {
      ...formData,
      [name]: value
    }

    // update form data
    setFormData({ ...newData })
  }

  // form submit event handler
  const handleSubmit = (e, signinUser) => {
    e.preventDefault()

    //console.log(formData)

    // call the graphql mutation function
    signinUser().then(data => {
      console.log(data);

      //clear form fields
      setFormData({ ...schema })
    }).catch(error => {
      //clear form fields
      setFormData({ ...schema })
    })

  }

  // validate form data
  const validateForm = () => {
    const isInvalid = (
      !formData.username ||
      !formData.password
    )

    return isInvalid
  }

  return (
    <div className='App'>
      <h1 className='App'>Signin</h1>
      <Mutation mutation={SIGNIN_USER} variables={{
        username: formData.username,
        password: formData.password
      }}>
        {
          (signinUser, { data, loading, error }) => {
            return (
              <form className='form' onSubmit={(e) => handleSubmit(e, signinUser)}>
                <input
                  type="text"
                  name="username"
                  placeholder='Username'
                  className=''
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  className=''
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className='button-primary'
                  disabled={loading || validateForm() ? true : false}
                >Signin</button>

                {error && <GraphQLError error={error} />}
              </form>
            )
          }
        }
      </Mutation>
    </div>
  )
}

export default Signin
