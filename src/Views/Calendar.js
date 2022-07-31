import CalendarMenu from "../Components/CalendarMenu";
import NavbarLogOut from "../Components/NavbarLogOut";

const Calendar = () => {
    return (
        <>
            <NavbarLogOut title="Seleccione una fecha para comenzar:" link="/"/>
            <CalendarMenu />
        </>
    )
};

export default Calendar;