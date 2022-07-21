import { Modal } from 'react-bootstrap';

const EditModal = (props) => {
    return (
    <Modal show={props.modal}>
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
            <button className="btn btn-outline-secondary" onClick={props.change}>Cerrar</button>
        </Modal.Footer>
    </Modal>
    )
};

export default EditModal;