import React from 'react'


function Month({currentMonth, nextMonth, prevMonth}) {

    const monthInYear=["January","February","March","April","May","June","July","August","September","October","November","December"]

  return (
    <div>
        <div>
            <h1>{monthInYear[currentMonth]}</h1>
            <button onClick={prevMonth}>Prev</button>
            <button onClick={nextMonth}>Next</button>

        </div>

    </div>
  )
}

export default Month