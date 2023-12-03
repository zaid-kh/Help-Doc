import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AppointmentPicker(){
// example for today's labels and invalids


const myLabels = React.useMemo(() => {
    return [{
        start: '2023-11-30',
        textColor: '#e1528f',
        title: '1 SPOTS'
    }];
}, []);

const myInvalid = React.useMemo(() => {
    return [{
        start: '2023-11-30T08:00',
        end: '2023-11-30T13:00'
    }, {
        start: '2023-11-30T15:00',
        end: '2023-11-30T17:00'
    }, {
        start: '2023-11-30T19:00',
        end: '2023-11-30T20:00'
    }];
}, []);
  return(                    
<DatePicker 
    controls={['calendar', 'timegrid']}
    min="2023-11-30T00:00"
    max="2024-05-30T00:00"
    minTime="08:00"
    maxTime="19:59"
    stepMinute={60}
    labels={myLabels}
    invalid={myInvalid}
/>
  )

}
export default AppointmentPicker;