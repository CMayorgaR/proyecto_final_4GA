import Navbar from "../Components/Navbar";
import CreateMenu from "../Components/CreateMenu";

const NewMenu =() => {
    return (
    <> 
    <Navbar  title="Crear Menú" link="/Calendar"/> 
    <CreateMenu />
    </>
    )
};


export default NewMenu;