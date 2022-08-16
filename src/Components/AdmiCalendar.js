import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../Styles/calendarMenu.css';
import ModalMenu from '../Components/ModalMenu';
import { Modal, Button } from 'react-bootstrap';

function AdmiCalendar() {
    const [date, onChange] = useState(new Date());
    const [show, setShow] = useState(false);
    const [menu, setMenu] = useState("");
    const handleClose = () => setShow(false);

    const menuCreados = [
        {
            id:1,
            fecha: "1-7-2022", 
            platoFondo:"https://tse3.mm.bing.net/th?id=OIP.vOterzGzqYu5zwLGrHRMgQHaE8&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:2,
            fecha: "2-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:3,
            fecha: "3-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:4,
            fecha: "4-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:5,
            fecha: "5-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:6,
            fecha: "6-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:7,
            fecha: "7-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:8,
            fecha: "8-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:9,
            fecha: "9-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:10,
            fecha: "10-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:11,
            fecha: "11-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  
        },
        {
            id:12,
            fecha: "12-7-2022", 
            platoFondo:"https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            ensaladas: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0",
            postre: "https://tse2.mm.bing.net/th?id=OIP.ab-8EuceigLExOdaGMRi-QHaG7&pid=Api&P=0"  

        }



 







    ];

    function resend(data) {
        const day = data.getDate();
        const month = data.getMonth() + 1;
        const year = data.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;
        console.log(menuCreados);
        console.log(formattedDate);
        const menuEscogido = menuCreados.filter(d => d.fecha === formattedDate);
        console.log('menuEscogido',menuEscogido);
        setMenu(menuEscogido);
        setShow(true);
    }
    console.log(date);
    console.log("menu", menu[0]);
    return (
        <div className="vista-color vista-calendar">
            <Calendar 
                onClick={"date"} 
                onChange={(e)=>resend(e)} 
                value={date}
            />
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {menu[0] ? 
                    <div>
                    <img src={menu[0].platoFondo}></img><img src={menu[0].ensaladas}></img><img src={menu[0].postre}></img>
                    </div>:<h1>Menu no encontrado</h1>}
                    
                       
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
export default AdmiCalendar;