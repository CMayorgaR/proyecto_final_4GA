import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/calendarMenu.css';
/* import ModalMenu from '../Components/ModalMenu'; */
import { Modal, Button } from 'react-bootstrap';

function DeliveryProfile() {
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    console.log(value);
    return (
        <div className="vista-color vista-calendar">
            <Calendar onClick={"value"} onChange={handleShow} value={value} />
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaRQzFiJ_zG0LhM7SiMB53Ban8hvfqQ-Jjw&usqp=CAU'></img>
                              <img src='data:image/jpeg;base64,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'></img>
                    <img src='data:image/jpeg;base64,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'></img>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default DeliveryProfile;