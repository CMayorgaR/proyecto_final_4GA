import { useEffect, useContext } from "react";
import { Context } from "../Store/appContext";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";

const SavedStarters = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getStarters();
    }, []); //todo lo que está dentro de los corchetes implica todas las veces que se va a ejecutar el efecto

    return (
        <div className="flex-column mb-3">
            <h1 className="fs-6 navbar-text text-center">Opciones guardadas</h1>
            <ul className="list-group text-start">
                {store.saved_starters.map((item, index) => {
                    return (
                        <li className="list-group-item" key={index}>{item.name}<EditButton /> <DeleteButton /> </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default SavedStarters;