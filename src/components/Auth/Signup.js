import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { SIGNUP_USER } from './../../queries'
import GraphQLError from '../Error/GraphQLError'

function Signup() {

  const schema = {
    username: '',
    email: '',
    password: '',
    password2: ''
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
  const handleSubmit = (e, signupUser) => {
    e.preventDefault()

    //console.log(formData)

    // call the graphql mutation function
    signupUser().then(({ data }) => {
      console.log(data.signupUser.token)

      // set token into localStorage
      localStorage.setItem("token", data.signupUser.token)

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
      !formData.email ||
      !formData.password2 ||
      !formData.password ||
      formData.password !== formData.password2
    )

    return isInvalid
  }

  return (
    <div className='App'>
      <h1 className='App'>Signup</h1>
      <Mutation mutation={SIGNUP_USER} variables={{
        username: formData.username,
        email: formData.email,
        password: formData.password
      }}>
        {
          (signupUser, { data, loading, error }) => {
            return (
              <form className='form' onSubmit={(e) => handleSubmit(e, signupUser)}>
                <input
                  type="text"
                  name="username"
                  placeholder='Username'
                  className=''
                  value={formData.username}
                  onChange={handleInputChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  className=''
                  value={formData.email}
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
                <input
                  type="password"
                  name="password2"
                  placeholder='Confirm Password'
                  className=''
                  value={formData.password2}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  className='button-primary'
                  disabled={loading || validateForm() ? true : false}
                >Signup</button>

                {error && <GraphQLError error={error} />}
              </form>
            )
          }
        }
      </Mutation>
    </div>
  )
}

export default Signup
