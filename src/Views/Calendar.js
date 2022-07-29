import CalendarMenu from "../Components/CalendarMenu";
import Navbar from "../Components/Navbar";

const Calendar = () => {
    return (
        <>
            <Navbar title="Seleccione una fecha para comenzar:" link="/"/>
            <CalendarMenu />
        </>
    )
};

export default Calendar;