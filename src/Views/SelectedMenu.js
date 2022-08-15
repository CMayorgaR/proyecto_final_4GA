import Navbar from "../Components/Navbar";
import UserSelectionStarter from "../Components/UserSelectionStarter";
import UserSelectionMain from "../Components/UserSelectionMain";
import UserSelectionSalad from "../Components/UserSelectionSalad";
import UserSelectionDessert from "../Components/UserSelectionDessert";
import { Context } from "../Store/appContext";
import { useContext, useEffect, useState } from "react";


const SelectedMenu = (props) => {
    const { store, actions } = useContext(Context);
    let today = store.saved_date;


    useEffect(() => { }, []);

    return <>
        <Navbar title="Seleccione su menú:" link="/usercalendar" />
        <div className="view-color">
            <div className="container-fluid justify-content-between row">
                <UserSelectionStarter />
                <UserSelectionMain />
                <UserSelectionSalad />
                <UserSelectionDessert />
                <div className="row">
                    <span className="option-text">Su selección para hoy:</span>
                    <ul className="list-group text-start">
                        {store.saved_selection.map((item, i) => {
                            return (
                                <li
                                    className="list-group-item d-flex justify-content-between"
                                    key={i}
                                >
                                    <span>{item}</span>
                                </li>
                            );
                        })}
                        <br/>
                        <button type="button" className="btn btn-outline-success" onClick={() => actions.addSelection(store.selection, today)}>Guardar selección</button>
                    </ul>
                </div>
            </div>
        </div>

    </>
}

export default SelectedMenu;