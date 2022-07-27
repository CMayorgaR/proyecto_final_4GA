import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const EditModal = (props) => {
  const [edit, setEdit] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    setEdit({ ...edit, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setEdit({
      name: "" || props.identification?.name,
      description: "" || props.identification?.description,
    });
  }, [props]); //cada vez que el props cambie se ejecuta el useEffect

  return (
    <Modal show={props.modal}>
      <Modal.Header className="d-flex justify-content-between navbar-text">
        {props.header}
        <button className="btn btn-outline-danger" onClick={props.change}>
          <FontAwesomeIcon icon={faCircleXmark} />
        </button>
      </Modal.Header>
      <Modal.Body>
        <form
          className="d-flex flex-column align-items-center"
          onSubmit={(e) => {
            props.call(edit, props.identification?.id, e);
            props.change(); //paréntesis para que esta propiedad se ejecute aquí.
          }}
        >
          <label className="form-label py-1.5">Modificar nombre:</label>
          <input
            type="text"
            name="name"
            value={edit.name}
            onChange={(e) => handleChange(e)}
          ></input>
          <br />
          <label className="form-label py-1.5">Modificar descripción:</label>
          <textarea
            name="description"
            value={edit.description}
            onChange={(e) => handleChange(e)}
          ></textarea>
          <br />
          <button className="btn btn-outline-success" type="submit">
            Guardar los cambios
          </button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
