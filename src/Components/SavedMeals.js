import { useEffect, useContext } from "react";
import { Context } from "../Store/appContext";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const SavedMeals = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getMeal("/starter/1");
    },[]);
    console.log(store.saved_meal)


    return (
    <div className="flex-column mb-3 ">
    <h1 className="fs-6 navbar-text text-center">Opciones guardadas</h1> 
    <ul className="list-group text-start">
        <li className="list-group-item">An item <EditButton /> <DeleteButton /> </li>
    </ul>
    </div>
    )
};

export default SavedMeals;