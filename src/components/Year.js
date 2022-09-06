import React from 'react'

function Year({currentYear, nextYear, prevYear}) {

  return (
    <div className='month'>
        <button onClick={prevYear} className='button'>Prev</button>
        <h1>{currentYear}</h1>
        <button onClick={nextYear} className='button'>Next</button>
    </div>
  )
}

export default Year