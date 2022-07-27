import CreateRoles from "../Components/CreateRoles";
import Navbar from "../Components/Navbar";

function Roles() {
    return (
        <>
            <Navbar title="Seleccionar Roles" link="/Calendar"/>
            <CreateRoles />
        </>
    );

}


export default Roles;