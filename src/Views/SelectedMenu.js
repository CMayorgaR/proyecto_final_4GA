import Navbar from "../Components/Navbar";
import UserSelectionStarter from "../Components/UserSelectionStarter";
import UserSelectionMain from "../Components/UserSelectionMain";
import UserSelectionSalad from "../Components/UserSelectionSalad";
import UserSelectionDessert from "../Components/UserSelectionDessert";



const SelectedMenu = () => {
    return <>
        <Navbar title="Seleccione su menú:" link="/Calendar" />
        <div className="view-color container-fluid">
        <div className="justify-content-between row">
        <UserSelectionStarter />
        <UserSelectionMain />
        <UserSelectionSalad />
        <UserSelectionDessert />
        </div>
        </div>
    </>
}

export default SelectedMenu;