import React from 'react'


function Month({currentMonth, nextMonth, prevMonth}) {

    const monthInYear=["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div>
        <div className='month'>
            <button onClick={prevMonth} className='button'>Prev</button>
            <h1 >{monthInYear[currentMonth]}</h1>
            <button onClick={nextMonth} className='button'>Next</button>

        </div>

    </div>
  )
}

export default Month