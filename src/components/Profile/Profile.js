import React from 'react'
import UserInfo from './UserInfo'
 
function Profile({ session }) {
  return (
    <div className='App'>
      <UserInfo session={session} />
    </div>
  )
}

export default Profile
