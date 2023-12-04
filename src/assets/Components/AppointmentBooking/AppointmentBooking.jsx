import React, { useState, useEffect ,useRef} from 'react';
import './AppointmentBooking.css'
import DateCards from './DateCards';
import { useLocation } from 'react-router-dom';


const AppointmentBooking = () => {
    const [dateCards, setDateCards] = useState([])
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [availableTimes, setAvailableTimes] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [user, setUser] = useState(null); 
    const boxFocus = useRef();
  
     //======================= Fetch doctor data
    useEffect(() => { 
      const fetchDoctorData = async () => {
        try {
          const result = await fetch('https://6566fd1464fcff8d730f82fe.mockapi.io/doctors/1');
          if (!result.ok) {
            throw new Error(`Failed to fetch doctor data. Status: ${result.status}`);
          }
  
          const data = await result.json();
          setDoctor(data);
        } catch (error) {
          console.error(error);
        }
      };
  
    //===================== Fetch user data
      const fetchUserData = async () => {
        try {
          const response = await fetch('https://6566fd1464fcff8d730f82fe.mockapi.io/users/1');
          if (!response.ok) {
            throw new Error(`Failed to fetch user data. Status: ${response.status}`);
          }
  
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchDoctorData();
      fetchUserData();
    
    }, []);

  useEffect(() => {

    const fetchAvailableTimes = async () => {
      const doctorSchedule = doctor.schedule || [];
      const appointmentDateTime = new Date(selectedDate);
      const selectedDateStr = appointmentDateTime.toISOString().split('T')[0];
      const daySchedule = doctorSchedule.find(date => date.date === selectedDateStr);
      setSelectedMonth(() => selectedDate.getMonth() +1);
      const btn = document.querySelector('.timeButtons');
      if(btn) {
      btn.style.backgroundColor = '#0D53FC';
      btn.style.color = '#fff';
    }
     
     if(daySchedule&&daySchedule.availableTimes){
            setAvailableTimes(daySchedule.availableTimes);
     }
   
     else{
        setAvailableTimes(['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00']);
     }
       
    };
   
    fetchAvailableTimes();

  }, [doctor, selectedDate]);

  useEffect(()=>{
    setDateCards([]);
    generateDateCards();
    const ele =  document.querySelector('.dateCard');
    if(ele){
        console.log("yesss");
        ele.style.border = '1px solid #0D53FC';
  
    }
  }, [dateCards,selectedMonth ,doctor])

  const handleDateClick = (date, id) => {
    const cards = document.querySelectorAll('.dateCard');
    if (cards.length !== 0) {
      const cardArray = [...cards];
      cardArray.forEach((c) => (c.style.border = 'none'));
    }
    const ele = document.getElementById(id);
    ele.style.border = '1px solid #0D53FC';

    setSelectedDate(date);
    setSelectedTime(null);
  };

const handleMonthChange = (newDate) => {
    setDateCards([]);
    setSelectedMonth(selectedDate.getMonth());
    setSelectedDate(newDate);
    setSelectedTime(null);
  };

  const handleBookAppointment = async () => {
  
    try {
     
      const appointmentDateTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':').map(Number);
      appointmentDateTime.setHours(hours, minutes);
  
  
      const selectedDateStr = appointmentDateTime.toISOString().split('T')[0];

      
      const dateIndex = doctor.schedule.findIndex((date) => date.date === selectedDateStr);
          
      if (dateIndex !== -1) {
        const updatedAvailableTimes = availableTimes.filter((time)=> time != selectedTime )

        const updatedAppointments = [
          ...doctor.schedule[dateIndex].appointments,
          {
            time: selectedTime,
            patientInfo: {
              name: "John Doe",
              email: "john@example.com",
            },
          },
        ];
  
    
        const updatedDoctorSchedule = [...doctor.schedule];
        updatedDoctorSchedule[dateIndex] = {
          ...updatedDoctorSchedule[dateIndex],
          appointments: updatedAppointments,
          availableTimes: updatedAvailableTimes
        };
  
      
        setDoctor((prevDoctor) => ({
          ...prevDoctor,
          schedule: updatedDoctorSchedule,
        }));
        
     
        await fetch(`https://6566fd1464fcff8d730f82fe.mockapi.io/doctors/1`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                schedule: updatedDoctorSchedule,
            }),
        });
    }
    else {
        //create a new entry for the date in the schedule
        const updatedAvailableTimes = availableTimes.filter((time)=> time != selectedTime )
        setAvailableTimes(updatedAvailableTimes);
        const newAppointment = {
          date: selectedDateStr,
          appointments: [
            {
              time: selectedTime,
              patientInfo: {
                name: "John Doe",
                email: "john@example.com",
              },
            },
         ],
        availableTimes:updatedAvailableTimes
        };
  
     
        const updatedDoctorSchedule = [...doctor.schedule, newAppointment ];
  
     
        setDoctor((prevDoctor) => ({
          ...prevDoctor,
          schedule: updatedDoctorSchedule,
        }));
  
     
        await fetch(`https://6566fd1464fcff8d730f82fe.mockapi.io/doctors/1`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            schedule: updatedDoctorSchedule,
          }),
        });
      }
      
        const updatedUser = {
            ...user,
            myAppointments: [
                ...user.myAppointments,
                {
                    date: selectedDateStr,
                    time: selectedTime,
                    doctor : {
                        name : doctor.name,
                        specialist: doctor.specialist,
                        email: doctor.email
                    }
                },
            ],
        };
        
        setUser(updatedUser);
      
        await fetch(`https://6566fd1464fcff8d730f82fe.mockapi.io/users/2`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedUser),
        });

      setSelectedTime(null);
    } catch (error) {
      console.error('Error booking appointment:', error);
    }
  };
  
  const handleTimeChange = (time) => {
    const btns = document.querySelectorAll('.timeButtons');
    if (btns.length !== 0) {
      const btnArray = [...btns];
      btnArray.forEach((c) => {
        c.style.backgroundColor = '#fff';
        c.style.color = '#8D8D8D';
      });
    }
    setSelectedTime(time);
    const btn = document.getElementById(time);
    btn.style.backgroundColor = '#0D53FC';
    btn.style.color = '#fff';
  };
  

  const generateDateCards = () => {
    let newDateCards = [];
    
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const year = firstDayOfMonth.getFullYear();

  if(doctor.length != 0){
    for (let i = firstDayOfMonth.getDate(); i <= lastDayOfMonth.getDate(); i++) {
        
        let isAvailableTimesEmpty = true;
       
        if (doctor.schedule) {
        
            const find = doctor.schedule.find((date) => (parseInt(date.date.slice(-2)) === i) && (parseInt(date.date.slice(0,4)) === year) && (parseInt(date.date.slice(5,7)) === selectedMonth));
            //  console.log(selectedDate);
            if (find ) {  // Check if availableTimes is empty
                console.log(find);
         
            isAvailableTimesEmpty = !(find.availableTimes.length === 0);
            // console.log(isAvailableTimesEmpty);
            }
            
        }
            const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i);
          

            const id = newDateCards.length + 1;

            newDateCards.push({date, id ,isAvailableTimesEmpty});
            setDateCards((prevDateCards) => [...prevDateCards, { date, id ,isAvailableTimesEmpty}]);
    
}
}
  };
  
  const showDates = ()=> {
    return dateCards.map((card) => (
        <DateCards
          key={card.id}
          date={card.date}
          id={card.id}
          handleDateClick={handleDateClick}
          isAvailableTimesEmpty ={card.isAvailableTimesEmpty}
        />
      ));
  }
  return (
    <div className="container">
    <div className="date-navigation">
      <button onClick={() => handleMonthChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))}>
        Previous Month
      </button>
      {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
      <button onClick={() => handleMonthChange(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))}>
        Next Month
      </button>
    </div>

    <div className="date-cards">
      {showDates()}
      {}
    </div>

    {availableTimes.length > 0 && (
      <div className="available-times">
        <label>Available Times:</label>
        <div className="available-times-buttons">
          {availableTimes.map((time ,index) => (
            <button key={time} 
             className='timeButtons'
             id= {time}
             onClick={() =>  handleTimeChange(time )}>
              {`${time} - ${parseInt(time.slice(0,2))+1}:00 `}
            </button>
          ))}
        </div>
      </div>
    )}

    <button className="book-appointment-button" onClick={handleBookAppointment} disabled={!selectedTime}>
      Book Appointment
    </button>
  </div>
);
};

export default AppointmentBooking;
