import React from 'react'
import { useState } from 'react'
import Events from'./Events'

function Tabledays({groups, date}) {

    var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    const [popup, setPopup]= useState(false)


  return (
    <div>
        <table style={{width: 750}}>
            <thead>
                <tr>
                    {weekDays.map(day=> <th>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {groups.map(row=>
                <tr className= 'row'>
                    {row.map(val=> {
                        if (val=== date) {
                            return (<td  onClick={()=> setPopup(true)} style={{backgroundColor: "black" ,color: "white"}}>{val}</td>)
                        }
                    return (<td onClick={()=> setPopup(true)}>{val}</td>) 
                    })}
                </tr>)}
            </tbody>
        </table>
        <Events popup={popup} setPopup={setPopup}></Events>
    </div>
  )
}

export default Tabledays