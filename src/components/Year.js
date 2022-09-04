import React from 'react'

function Year({currentYear, nextYear, prevYear}) {

  return (
    <div>
        <h1>{currentYear}</h1>
        <button onClick={prevYear}>Prev</button>
        <button onClick={nextYear}>Next</button>

    </div>
  )
}

export default Year