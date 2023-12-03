import React, { useState, useEffect } from 'react';
import DoctorCard from '../../assets/Components/Cards/Card';
import Heading from '../Heading/Heading';
import { Navigation } from '../Navigation';
import { useNavigate } from "react-router-dom";



function DashBoard() {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch('https://6566fd1464fcff8d730f82fe.mockapi.io/doctors');
        if (!result.ok) {
          throw new Error(`Failed to fetch data. Status: ${result.status}`);
        }

        const data = await result.json();
        setDoctors(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 

  const handleDoctorClick = (doctor) => {
    navigate(`/dashboard/${doctor.id}`, { state: { doctor } });
  };

  return (
    <>
      
      <Heading text="My Doctors"/>
      {doctors.map((doctor) => (
        <div key={doctor.id} onClick={() => handleDoctorClick(doctor)}>
          <DoctorCard
            img={doctor.img}
            name={doctor.name}
            type={doctor.specialist}
            status={doctor.status}
            rate={doctor.rate}
          />
        </div>

      ))}
      <Navigation/>
    </>
  );
}

export default DashBoard;
