import React from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const DescriptionModal = (props) => {

    return (<>
        <Modal show={props.open} className="container-fluid justify-content-center">
            <ModalHeader className="d-flex justify-content-between navbar-text">
                Información Nutricional/Detalles:
                <button
                    className="btn btn-outline-danger"
                    onClick={props.onClose}
                >
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
            </ModalHeader>
            <ModalBody>{props.description}</ModalBody>
        </Modal>
    </>
    )
};

export default DescriptionModal;

