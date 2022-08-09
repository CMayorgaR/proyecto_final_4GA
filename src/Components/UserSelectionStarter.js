import { useContext, useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleInfo, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const UserSelectionStarter = (props) => {
  const { actions, store } = useContext(Context);

  const [modal, setModal] = useState(false);

  useEffect(() => {
    actions.getStarters();
  }, []);

  let savedStarters = store.saved_starters;
  let today = store.saved_date;
  let startersOfToday = savedStarters.filter(function (starter) {
    return starter.date == today;
  });

  return (
    <div className="flex-column mb-3 forms col">
      <div className="flex-column">
        <h1 className="fs-6 navbar-text text-center">Entradas:</h1>
        <ul className="list-group text-start">
          {startersOfToday.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
                name="starter"
              >
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => setModal(true)}
                  >
                    <FontAwesomeIcon icon={faCircleInfo} />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => actions.handleSelection("starter_id", item.id, item.name)}
                  >
                    <FontAwesomeIcon icon={faCirclePlus} />
                  </button>
                </span>
                <Modal  show={modal}  className="container-fluid justify-content-center">
                  <ModalHeader className="d-flex justify-content-between navbar-text">
                    Información Nutricional/Detalles:
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => setModal(false)}
                    >
                      <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                  </ModalHeader>
                  <ModalBody>{item.description}</ModalBody>
                </Modal>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserSelectionStarter;
