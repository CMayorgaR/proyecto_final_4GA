import { useContext, useState } from "react";
import { Context } from "../Store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";


const NewEntry = (props) => {
  const { actions, store } = useContext(Context);
  const [save, setSave] = useState({
    name: "",
    description: "",
  });
  const [send, setSend] = useState(false);
  const onChange = (e) => {
    setSave({ ...save, [e.target.name]: e.target.value });
    if (e.target.value != "") {
      setSend(true)
    }
    else {
      setSend(false)
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    actions.addMeal(save, send, props.ruta);
    setSave({
      name: "",
      description: ""
    });
    setSend(false)
    //actions.getAll(props.ruta);
  };

  return (
    <div className="flex-column mb-3 forms">
      <form onSubmit={(evento) => onSubmit(evento)}>
        <label className="form-label">{props.title}</label>
        <input type="text" name="name" className="form-control" rows="2" placeholder="Añadir entrada" value={save.name} onChange={(e) => onChange(e)} />
        <br />
        <textarea name="description" className="form-control" rows="4" placeholder="Añadir descripción" value={save.description} onChange={(e) => onChange(e)}></textarea>
        <br />
        <button className="btn btn-success float-end" disabled={!send} type="submit"><FontAwesomeIcon icon={faCirclePlus} /></button>
      </form>
    </div>
  )
};

export default NewEntry;