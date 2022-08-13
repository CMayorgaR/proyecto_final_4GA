import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const UserSelectionSalad = (props) => {
  const { actions, store } = useContext(Context);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    actions.getSalads();
  }, []);

  let savedSalads = store.saved_salads;
  let today = store.saved_date;
  let saladsOfToday = savedSalads.filter(function (salad) {
    return salad.date == today;
  })

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 navbar-text text-center">Ensaladas:</h1>
        <ul className="list-group text-start">
          {saladsOfToday.map((item, index) => {
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
                  onClick={()=>setModal(true)}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={()=>actions.handleSelection("salad_id", item.id, item.name, item.date)}
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

export default UserSelectionSalad;
