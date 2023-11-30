import React, { useState } from 'react'
import { Navigation } from '../Navigation'

const Appointments = () => {
    const [doc,setDoc] = useState()

  return (
    <div>Appointments
      <Navigation />
    </div>
  )
}

export default Appointments