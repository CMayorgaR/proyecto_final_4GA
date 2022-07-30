import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";

const CreateSaveDesserts = (props) => {
  const { actions, store } = useContext(Context);
  
  const [save, setSave] = useState({
    name: "",
    description: "",
  });
  
  const [send, setSend] = useState(false);

  const [modal, setModal] = useState(false);

  const [info, setInfo] = useState();

  useEffect(() => {
    actions.getDesserts();
  }, []);

  const onChange = (e) => {
    setSave({ ...save, [e.target.name]: e.target.value });
    if (e.target.value != "") {
      setSend(true);
    } else {
      setSend(false);
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    actions.addDesserts({...save, date: props.initialDate}, send, props.ruta);
    setSave({
      name: "",
      description: "",
    });
    setSend(false);
  };

  return (
    <div className="flex-column forms col">
      <form onSubmit={(evento) => onSubmit(evento)}>
        <label className="form-label">{props.title}</label>
        <input
          type="text"
          name="name"
          className="form-control"
          rows="2"
          placeholder="Añadir entrada"
          value={save.name}
          onChange={(e) => onChange(e)}
        />
        <br />
        <textarea
          name="description"
          className="form-control"
          rows="4"
          placeholder="Añadir descripción"
          value={save.description}
          onChange={(e) => onChange(e)}
        ></textarea>
        <br />
        <button
          className="btn btn-success float-end"
          disabled={!send}
          type="submit"
        >
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
      <div className="flex-column mt-5">
        <h1 className="fs-6 navbar-text text-center">Opciones guardadas</h1>
        <ul className="list-group text-start">
          {store.saved_desserts.map((item, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between"
                key={index}
              >
                <span className="d-flex align-items-center">{item.name}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => {
                      setModal(true);
                      setInfo(item);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  &nbsp;
                  <button
                    type="button"
                    className="btn btn-outline-success"
                    onClick={() => actions.removeDessert(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </span>
                <EditModal
                  header="¿Desea realizar cambios a este Postre?"
                  modal={modal}
                  change={() => setModal(false)}
                  identification={info}
                  call={actions.editDessert}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateSaveDesserts;
