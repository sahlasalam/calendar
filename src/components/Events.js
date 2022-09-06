import React from 'react'

function Events({popup, setPopup}) {
  return (
    popup? <div className='event'>
        <p>Events</p>
        <input placeholder='Add Event'></input>
        <button>Add</button>
        <button>Delete</button>
        <button onClick={()=> setPopup(false)}>Close</button>
    </div> : ""
  )
}

export default Events