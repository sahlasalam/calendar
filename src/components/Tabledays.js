import React from 'react'

function Tabledays({groups, date}) {

    var weekDays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

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
                <tr>
                    {row.map(val=> {
                        if (val=== date) {
                            return (<td style={{backgroundColor: "blue"}}>{val}</td>)
                        }
                    return (<td>{val}</td>) 
                    })}
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Tabledays