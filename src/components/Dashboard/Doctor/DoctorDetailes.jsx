import React from 'react'
import { useLocation  } from 'react-router-dom';
import DoctorDetails from '../../DoctorDetails/DoctorDetails';

const DoctorDetailes = () => {
    const location = useLocation();
  const { doctor } = location.state || {};
  return (
    <>
      {doctor ? (
        <div>
          <DoctorDetails doctor={doctor} /> 
        </div>
      ) : (
        <p>No doctor details found</p>
      )}
    </>
  )
}

export default DoctorDetailes