import React, { useState, useEffect } from 'react';
import TitleComponent from '../Header/Header';
import DoctorCard from '../../assets/Components/Cards/Card';



function DashBoard() {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <>
      <TitleComponent title="My Doctors" />
      {doctors.map((doctor) => (
        <div key={doctor.id}>
          <DoctorCard
            img={doctor.img}
            name={doctor.name}
            type={doctor.specialist}
            status={doctor.status}
            rate={doctor.rate}
          />
        </div>

      ))}
    </>
  );
}

export default DashBoard;
