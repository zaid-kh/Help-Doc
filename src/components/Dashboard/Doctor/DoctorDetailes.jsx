import React from 'react'
import { useLocation  } from 'react-router-dom';

const DoctorDetailes = () => {
    const location = useLocation();
  const { doctor } = location.state || {};
  return (
    <div>
      <h2>Doctor Details</h2>
      {doctor ? (
        <div>
          <p>Doctor ID: {doctor.id}</p>
          <p>Doctor Name: {doctor.name}</p>
    
        </div>
      ) : (
        <p>No doctor details found</p>
      )}
    </div>
  )
}

export default DoctorDetailes