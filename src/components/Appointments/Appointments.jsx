import React, { useState } from 'react'
import { Navigation } from '../Navigation'
import Heading from '../Heading/Heading'

const Appointments = () => {
    const [doc,setDoc] = useState()

  return (
    <div>
      <Heading text="My Appointments"/>
      <Navigation />
    </div>
  )
}

export default Appointments