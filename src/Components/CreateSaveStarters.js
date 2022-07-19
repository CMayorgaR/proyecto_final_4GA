import { useContext, useState, useEffect } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";


const CreateSaveStarters = (props) => {
  const { actions, store } = useContext(Context);
  
  const [save, setSave] = useState({
    name: "",
    description: "",
  });

  const [send, setSend] = useState(false);

  const [edit, setEdit] = useState(false);
  
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


  console.log(edit)
  
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
                {!edit ? item.name : <form onSubmit={()=>actions.editStarter}>
                <input type="text" className="form-control" rows="2" placeholder={item.name}></input>
                <input type="text" className="form-control" rows="2" placeholder={item.description}></input>
                <button className="btn btn-success float-end" type="submit">
                <FontAwesomeIcon icon={faCirclePlus} />
                </button>
                </form>}
                <button type="button" className="btn btn-outline-success" onClick={()=>setEdit(!edit)}>
                  <FontAwesomeIcon icon= {faPenToSquare} />
                </button>
                <button type="button" className="btn btn-outline-success" onClick={()=> actions.removeStarter(item.id)}>
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

export default CreateSaveStarters;
