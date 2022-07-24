import { Modal } from 'react-bootstrap';
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const EditModal = (props) => {
    const [edit, setEdit] = useState();

    const onChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value});
        console.log(onChange())
    };
    
    return (
    <Modal show={props.modal}>
        <Modal.Header className="d-flex justify-content-between navbar-text">
        {props.header}
        <button className="btn btn-outline-danger" onClick={props.change}> <FontAwesomeIcon icon={faCircleXmark}/> {props.identification?.id}</button>
        </Modal.Header>
        <Modal.Body>
            <form className="d-flex flex-column align-items-center" onSubmit={props.call}>
                <label className="form-label py-1.5">Modificar nombre:</label>
                <input type="text" name="first" value={props.identification?.name} onChange={(e)=>onChange(e)}></input>
                <br/>
                <label className="form-label py-1.5">Modificar descripción:</label>
                <textarea name= "second" value={props.identification?.description} onChange={(e)=>onChange(e)}></textarea>
                <br/>
                <button className="btn btn-outline-success" type="submit">Guardar los cambios</button>
            </form>
        </Modal.Body>
    </Modal>
    )
};

export default EditModal;