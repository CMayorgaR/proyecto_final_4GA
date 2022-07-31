import Navbar from "../Components/Navbar";
import UserSelectionStarter from "../Components/UserSelectionStarter";
import UserSelectionMain from "../Components/UserSelectionMain";
import UserSelectionSalad from "../Components/UserSelectionSalad";
import UserSelectionDessert from "../Components/UserSelectionDessert";
import { Context } from "../Store/appContext";
import { useContext, useEffect, useState } from "react";


const SelectedMenu = () => {
    const { store, actions } = useContext(Context);

    /* const sendSelection=(e)=>{
        e.preventDefault();
        actions.addSelection(store.selection);
        return console.log(store.selection)   
    } */

    useEffect(()=> {}, []);
    
    return <>
        <Navbar title="Seleccione su menú:" link="/Calendar" />
        <div className="view-color container-fluid">
        <div className="justify-content-between row">
        <UserSelectionStarter />
        <UserSelectionMain />
        <UserSelectionSalad />
        <UserSelectionDessert />
        <div className= "view-color container-fluid">
            <h1>Su selección para hoy:</h1>
            <ul className="list-group text-start">
            {store.saved_selection.map((item, i)=>{
                return (
                    <li
                      className="list-group-item d-flex justify-content-between"
                      key={i}
                    >
                       <span>{item}</span>    
                    </li>
                  ); 
                  })}
            <button type="button" className="btn btn-outline-success" onClick={()=>actions.addSelection(store.selection)}>Guardar selección</button>
            </ul>
        </div>
        </div>
        </div>
        
    </>
}

export default SelectedMenu;