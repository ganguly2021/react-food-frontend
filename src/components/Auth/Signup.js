import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { SIGNUP_USER } from './../../queries'

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
    signupUser().then(data => {
      console.log(data);

      //clear form fields
      setFormData({ ...schema })
    }).catch(error => {
      //clear form fields
      setFormData({ ...schema })
    })

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
                >Signup</button>

                {error && <p>{error.message}</p>}
              </form>
            )
          }
        }
      </Mutation>
    </div>
  )
}

export default Signup
