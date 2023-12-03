const DateCards = ({date , handleDateClick , id , isAvailableTimesEmpty}) => {

  
    return (
        <>
        <div 
          className='dateCard'
          id= {id}
          style={{
            border:'none',
            borderRadius: '6px',
            padding: '16px',
            margin: '8px',
            maxWidth: '50px',
            maxHeight: '70px',
            cursor: 'pointer',
            textAlign: 'center',
            backgroundColor: isAvailableTimesEmpty ?  '#fff':'#EBF1F9'  ,
            boxShadow: isAvailableTimesEmpty ?   '1px 4px 12px 0px rgba(0, 0, 0, 0.10)':'none' ,
        }}
        onClick={() => handleDateClick(date ,id)}
        >
          <div
            style={{
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '24px',
                fontFamily: 'Inter',
                color: '#AAA'  ,
                textAlign: 'center',
            }}
            >
            {date.toLocaleDateString('en-US', { weekday: 'long' }).slice(0, 3)}
          </div>
  
          <div style={{
                fontSize: '16px',
                fontWeight: '600',
                lineHeight: '24px',
                fontFamily: 'Inter',
                color: isAvailableTimesEmpty ?  '#0D53FC' : '#AAA'  ,
                textAlign: 'center',
            }}>{date.getDate()}</div>
        </div>
        </>
    )
  };
  
  export default DateCards;