import AdmiCalendar from '../Components/AdmiCalendar';
import Navbar from "../Components/Navbar";

function Admi(){
    return(
        <>
            <Navbar title="Administrador Calendario" link="/" />
            <AdmiCalendar />
        </>
    );
}

export default Admi;