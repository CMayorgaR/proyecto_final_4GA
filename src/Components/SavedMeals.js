import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const SavedMeals = () => {
    return (
    <>
    <h1 className="fs-6 navbar-text text-center">Opciones guardadas</h1> 
    <div className="container-fluid d-flex justify-content-center">   
    <ul className="list-group text-start">
        <li className="list-group-item">An item <EditButton /> <DeleteButton /> </li>
    </ul>
    </div>
    </>
    )
};

export default SavedMeals;