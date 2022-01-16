import React from 'react'
import UserInfo from './UserInfo'
import withAuth from '../../hoc/withAuth'

function Profile({ session }) {
  return (
    <div className='App'>
      <UserInfo session={session} />
    </div>
  )
}

export default withAuth(
  session => session && session.getCurrentUser
)(Profile)
