import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const UserSelectionDessert = (props) => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.getDesserts();
  }, []);

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column mt-5">
        <h1 className="fs-6 navbar-text text-center">Postres disponibles:</h1>
        <ul className="list-group text-start">
          {store.saved_desserts.map((item, index) => {
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

export default UserSelectionDessert;