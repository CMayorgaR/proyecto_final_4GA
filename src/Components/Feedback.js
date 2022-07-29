import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Feedback.css';
import React, { useState } from 'react';


function Feedback() {
    const [showFeedback, setShowFeedback] = useState(true);

    function feedback() {
        setShowFeedback(false);
    }

    if (showFeedback) {
        return (
            <>
                <div className='row'>
                    <div className='col'>
                        <h2>Primer Menu</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col  cooll'>
                        <img className='imagenOne' src="https://tse2.mm.bing.net/th?id=OIP.yPAAon_QtqRBPC_ECrtWAAHaHT&pid=Api&P=0"></img>
                    </div>
                    <div className='col'>
                        <img className='imagenOne' src="https://tse3.mm.bing.net/th?id=OIP.KpEm_C5N1kGdp2eRt0wknAHaEk&pid=Api&P=0"></img>
                    </div>
                    <div className='col'>
                        <img className='imagenOne' src="https://thumbs.dreamstime.com/b/postre-de-la-jalea-de-strawberyy-50782964.jpg"></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <Form.Check
                            inline
                            type='radio'
                            id='Usuario'
                            class='default-radio'
                            label='Muy Bueno'
                            name='seleccionar'
                        />
                        <Form.Check
                            inline
                            type='radio'
                            id='Usuario'
                            class='default-radio'
                            label='Bueno'
                            name='seleccion'
                        />
                        <Form.Check
                            inline
                            type='radio'
                            id='Usuario'
                            class='default-radio'
                            label='Malo'
                            name='seleccion'
                        />
                        <Form.Check
                            inline
                            type='radio'
                            id='Repartidor'
                            class='default-radio'
                            label='Muy Malo'
                            name='seleccion'
                        />
                    </div>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <h1 className='feed'>Gracias por tu Feedback! </h1>
            </>
        )
    }
}

export default Feedback;