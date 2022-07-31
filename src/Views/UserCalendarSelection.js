import UserCalendar from "../Components/UserCalendar";
import NavbarLogOut from "../Components/NavbarLogOut";

const UserCalendarSelection = () => {
    return (
        <>
            <NavbarLogOut title="Seleccione una fecha para comenzar:" link="/"/>
            <UserCalendar />
        </>
    )
};

export default UserCalendarSelection;