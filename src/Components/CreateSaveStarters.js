import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'react-bootstrap'


const CreateSaveStarters = (props) => {
  const { actions, store } = useContext(Context);
  
  const [save, setSave] = useState({
    name: "",
    description: "",
  });

  const [send, setSend] = useState(false);

  const [modal, setModal] = useState(false)

  useEffect(() => {
    actions.getStarters();
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
    actions.addStarters(save, send, props.ruta);
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
        <input type="text" name="name" className="form-control" rows="2" placeholder="Añadir entrada" value={save.name} onChange={(e) => onChange(e)} />
        <br />
        <textarea name="description" className="form-control" rows="4" placeholder="Añadir descripción" value={save.description} onChange={(e) => onChange(e)} ></textarea>
        <br />
        <button className="btn btn-success float-end" disabled={!send} type="submit">
          <FontAwesomeIcon icon={faCirclePlus} />
        </button>
      </form>
      <div className="flex-column mt-5">
        <h1 className="fs-6 navbar-text text-center">Opciones guardadas</h1>
        <ul className="list-group text-start">
          {store.saved_starters.map((item, index) => {
            return (
              <li className="list-group-item" key={index}>
                {item.name} 
                  <button type="button" className="btn btn-outline-success" onClick={()=>setModal(true)}>
                  <FontAwesomeIcon icon= {faPenToSquare} />
                  </button>
                <button type="button" className="btn btn-outline-success" onClick={()=> actions.removeStarter(item.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </li>);
          })}
        </ul>
        <Modal show={modal}>
            <Modal.Header className="d-flex justify-content-center navbar-text">
              ¿Desea realizar cambios a esta entrada?
            </Modal.Header>
            <Modal.Body>
              <form className="d-flex flex-column align-items-center">
                <label className="form-label py-1.5">Modificar nombre:</label>
                <input></input>
                <br/>
                <label className="form-label py-1.5">Modificar descripción:</label>
                <textarea></textarea>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-outline-success">Guardar los cambios</button>
              <button className="btn btn-outline-secondary" onClick={()=> setModal(false)} aria-label="Salir sin guardar">Cerrar</button>
            </Modal.Footer>
          </Modal>
      </div>
    </div>
  );
};

export default CreateSaveStarters;