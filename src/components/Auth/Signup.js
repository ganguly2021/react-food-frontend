import React, { useState } from 'react'

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
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)
  }

  return (
    <div className='App'>
      <h1 className='App'>Signup</h1>
      <form className='form' onSubmit={handleSubmit}>
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
      </form>
    </div>
  )
}

export default Signup
