import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditModal from "./EditModal";

const CreateSaveSalads = (props) => {
  const { actions, store } = useContext(Context);
  
  const [save, setSave] = useState({
    name: "",
    description: "",
    date:""
  });
  const [send, setSend] = useState(false);
  
  const [modal, setModal] = useState(false);

  const [info, setInfo] = useState();

  useEffect(() => {
    actions.getSalads();
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
    actions.addSalads({...save, date: props.initialDate}, send, props.ruta);
    setSave({
      name: "",
      description: "",
      date:""
    });
    setSend(false);
  };

  let savedSalads = store.saved_salads;
  let today = store.saved_date;
  let saladsOfToday = savedSalads.filter(function (salad) {
    return salad.date == today;
  })

  return (
    <div className="flex-column mb-3 forms col">
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
          {saladsOfToday.map((item, index) => {
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
                    onClick={() => actions.removeSalad(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                </span>
                <EditModal
                  header="¿Desea realizar cambios a esta Ensalada?"
                  modal={modal}
                  change={() => setModal(false)}
                  identification={info}
                  call={actions.editSalad}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateSaveSalads;
