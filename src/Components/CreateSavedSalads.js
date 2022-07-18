import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import EditButton from "./EditButton";

const CreateSaveSalads = (props) => {
  const { actions, store } = useContext(Context);
  const [save, setSave] = useState({
    name: "",
    description: "",
  });
  const [send, setSend] = useState(false);
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
    actions.addSalads(save, send, props.ruta);
    setSave({
      name: "",
      description: "",
    });
    setSend(false);
  };

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
          {store.saved_salads.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item.name}
                <EditButton />
                <button type="button" className="btn btn-outline-success">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CreateSaveSalads;
