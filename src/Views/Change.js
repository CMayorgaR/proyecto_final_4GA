import ChangePassword from '../Components/ChangePassword';
import Navbar from "../Components/Navbar";

function Change(){
    return(
        <>
            <Navbar title="Cambiar Contraseña" link="/Calendar" />
            <ChangePassword />
        </>
    );
}

export default Change;