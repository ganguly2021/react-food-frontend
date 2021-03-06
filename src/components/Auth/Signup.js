import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { SIGNUP_USER } from './../../queries'
import GraphQLError from '../Error/GraphQLError'
import { useNavigate } from 'react-router-dom'

function Signup({ refetch }) {

  const schema = {
    username: '',
    email: '',
    password: '',
    password2: ''
  }

  const [formData, setFormData] = useState({ ...schema })
  const navigate = useNavigate()


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
    signupUser().then(async ({ data }) => {
      // set token into localStorage
      localStorage.setItem("token", data.signupUser.token)

      // refetch current user
      await refetch()

      //clear form fields
      setFormData({ ...schema })

      // redirect to home page
      navigate('/')
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
              <form onSubmit={(e) => handleSubmit(e, signupUser)}>
                <input
                  type="text"
                  name="username"
                  placeholder='Username'
                  className=''
                  value={formData.username}
                  onChange={handleInputChange}
                /> <br />
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  className=''
                  value={formData.email}
                  onChange={handleInputChange}
                /> <br />
                <input
                  type="password"
                  name="password"
                  placeholder='Password'
                  className=''
                  value={formData.password}
                  onChange={handleInputChange}
                /> <br />
                <input
                  type="password"
                  name="password2"
                  placeholder='Confirm Password'
                  className=''
                  value={formData.password2}
                  onChange={handleInputChange}
                /> <br />
                <button
                  type="submit"
                  className='button-primary'
                  disabled={loading || validateForm() ? true : false}
                >Signup</button> <br />

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
