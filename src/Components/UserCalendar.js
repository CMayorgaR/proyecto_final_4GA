import React, { useState, useContext } from 'react';
import Calendar from 'react-calendar';
import { Context } from "../Store/appContext";
import '../Styles/calendarMenu.css';
import { useNavigate } from "react-router-dom";
import 'react-calendar/dist/Calendar.css';


function UserCalendar() {
    const [date, setDate] = useState(new Date());
    const { actions } = useContext(Context);
    let history =  useNavigate(); 
    function resend(data) {
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        const dateString = formattedDate.toString();

        console.log("nuevafecha", dateString);
        //esta funcion es para cuando presiono una fecha x en el calendario me retornara a new_menu
        actions.saveDate(`${dateString}`);
        history(`/userselection/${dateString}`); //string variable
    }
    
    console.log(date);
    return (
        <>
        <div className="vista-color vista-calendar d-flex justify-content-center">
            <Calendar 
                onClick={"date"} 
                onChange={(e)=>resend(e)} 
                value={date} 
            />
        </div>
        </>
        
        
    );
}
export default UserCalendar;