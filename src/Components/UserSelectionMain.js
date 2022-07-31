import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const UserSelectionMain = (props) => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getMains();
  }, []);

  let savedMains = store.saved_mains;
  let today = store.saved_date;
  let mainsOfToday = savedMains.filter(function (main) {
    return main.date == today;
  })

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 navbar-text text-center">Plato de Fondo disponibles:</h1>
        <ul className="list-group text-start">
          {mainsOfToday.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>actions.handleSelection("main_id", item.id, item.name, item.date)}
                  >
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserSelectionMain;
