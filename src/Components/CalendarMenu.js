import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/calendarMenu.css';
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';


function CalendarMenu() {
    const [date, setDate] = useState(new Date());
    let history =  useNavigate(); 
    function resend(data) {
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        const dateString = formattedDate.toString();

        console.log("nuevafecha", dateString);
        //esta funcion es para cuando presiono una fecha x en el calendario me retornara a new_menu
         history(`/newMenu/${dateString}`); //string yvariable
    }
    
    console.log(date);
    return (
        <>
        <div className="vista-color vista-calendar " >
            <Calendar 
                onClick={"date"} 
                onChange={(e)=>resend(e)} 
                value={date} 
                
            />
        </div>
        </>
        
        
    );
}
export default CalendarMenu;
