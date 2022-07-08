import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Components/calendarMenu.css';
import ModalMenu from '../Components/ModalMenu';
import { Modal, Button } from 'react-bootstrap';

function CalendarMenu() {
    const [value, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    console.log(value);
    return (
        <div className="vista-color vista-calendar">
            <Calendar onChange={handleShow} value={value} />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaRQzFiJ_zG0LhM7SiMB53Ban8hvfqQ-Jjw&usqp=CAU'></img>

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
export default CalendarMenu;
