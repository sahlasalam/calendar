import './App.css';
import Month from './components/Month';
import Year from './components/Year';
import Tabledays from './components/Tabledays';
import {useCallback, useEffect, useState, useMemo} from 'react';


function App() {
  // const [dayInCalendar, setDayInCalendar] = useState([]);

  const prevday= [];
  const prevPadDay= [];
  const nextDay= [];
  const nextPadDay= [];
  var groups= [];
  var dayInCalendar= [];


  const [currentDate , setCurrentDate]= useState(new Date());
  // const [currentMonth, setCurrentMonth]= useState(currentDate.toLocaleString('default', { month: 'long' }))
  const [currentMonth, setCurrentMonth]= useState(currentDate.getMonth())
  const [currentYear, setCurrentYear]= useState(currentDate.getFullYear())
  var date= currentDate.getDate();

  useMemo(() => {
    var date= currentDate.getDate();

    var firstDay= new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
    var lastDay= new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDay();
    
    var lastDate= new Date(currentDate.getFullYear(), currentDate.getMonth()+1, 0).getDate();

    for (var i=date; i >= 1; --i){
      // setDayInCalendar( dayInCalendar=>[i, ...dayInCalendar])
      prevday.unshift(i);
      // setDayInCalendar(dayInCalendar => [i].concat(dayInCalendar))
}
// console.log(prevday);

for(var j=0; j<firstDay; ++j){
  prevPadDay.push(" ");
}
// console.log(prevPadDay);

for(var k= date+1; k<=lastDate; ++k ){
  nextDay.push(k);
}
for(var l=lastDay+1; l<=6; ++l){
  nextPadDay.push(" ");
}
// console.log(nextPadDay);
 dayInCalendar=[...prevPadDay, ...prevday, ...nextDay,...nextPadDay];
//  console.log(dayInCalendar);

 groups= dayInCalendar.map((e,i)=>{
  return i%7 === 0 ? dayInCalendar.slice(i, i+7): null;
}).filter(e=>{return e;});
// console.log(groups);
   
  }, [currentMonth, currentYear])
  


  useEffect(() => {
    selecteDate()
    
  }, [])

  const selecteDate=()=>{
    dayInCalendar.map(item=>{
      if(item=== date){
        return date;
      }
    }
      )
} 
console.log("before",currentMonth);
 const nextMonth= useCallback(()=>{
   setCurrentMonth(currentMonth+1);
   console.log("after",currentMonth);
   setCurrentDate(new Date(currentYear,currentMonth))
  },[currentMonth])

const prevMonth= useCallback(()=>{
  setCurrentMonth(currentMonth-1)
  setCurrentDate(new Date(currentYear,currentMonth))
}, [currentMonth])

const nextYear= useCallback(()=>{
  setCurrentYear(currentYear+1)
},[currentYear])

const prevYear= useCallback(()=>{
  setCurrentYear(currentYear-1)
}, [currentYear])


  return (
    <div className="App">
      <Year currentYear={currentYear} nextYear={nextYear} prevYear={prevYear}></Year>
      <Month currentMonth={currentMonth} nextMonth={nextMonth} prevMonth={prevMonth}></Month>
      <Tabledays date={date} groups={groups}></Tabledays>
    </div>
  );
}

export default App;
