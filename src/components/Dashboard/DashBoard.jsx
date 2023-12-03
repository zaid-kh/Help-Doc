import React from 'react'
import { Navigation } from '../Navigation'

export default function DashBoard() {
  const user = sessionStorage.getItem('user')
  console.log(user)
  return (
    <div>DashBoard
    
      <Navigation user={user}/>
    </div>
  )
}
