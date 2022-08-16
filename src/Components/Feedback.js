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
                        <h2 className='menuu'>Primer Menu</h2>
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
                        <img className='imagenOne' src="https://tse2.mm.bing.net/th?id=OIP.wuENP52aYUgBnSARclAqIgHaHa&pid=Api&P=0"></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>

                        <div className="d-flex justify-content-center">
                            <div className="p-2"><Form.Check
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
                                /></div>

                        </div>

                    </div>
                </div>

                <div className='row'>
                    <div className='col'>

                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <h2 className='menuu'>Segun Menu</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col  cooll'>
                        <img className='imagenOne' src="https://guiaepicureo.com.ar/wp-content/uploads/2019/03/carne-al-pajarito-con-papas-fritas-francisco-raggio-guia-epicureo-1.jpg"></img>
                    </div>
                    <div className='col'>
                        <img className='imagenOne' src="https://tse4.mm.bing.net/th?id=OIP.MRNG62bOdqqgPC9fqG1uYwHaE7&pid=Api&P=0"></img>
                    </div>
                    <div className='col'>
                        <img className='imagenOne' src="https://tse1.mm.bing.net/th?id=OIP.HVfW1Y5ZNA0Cfw8BqFcY6gHaFX&pid=Api&P=0"></img>
                    </div>
                </div>
                <div className='row'>
                    <div className='col center' >
                        <div className="d-flex justify-content-center">
                            <div className="p-2"><Form.Check
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
                                /></div>

                        </div>


                    </div>


                    <div className='row'>
                        <div className='col'>
                            <h2 className='menuu'>Tercer Menu</h2>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col  cooll'>
                            <img className='imagenOne' src="https://tse2.mm.bing.net/th?id=OIP.VELz0Xgl-jTjuaay0tDD0gHaFj&pid=Api&P=0"></img>
                        </div>
                        <div className='col'>
                            <img className='imagenOne' src="https://4.bp.blogspot.com/-HMR6m-d3oPk/V2wL9yn-pCI/AAAAAAAAEOk/WV716jG4oqEE1-Hd5-m0fZYjwrtYcpdzgCLcB/s1600/Ensaladamixta2.jpg"></img>
                        </div>
                        <div className='col'>
                            <img className='imagenOne' src="https://www.deliciasdelmar.com.ec/wp-content/uploads/2020/08/03-Duraznos-con-crema-600x600.png"></img>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>

                            <div className="d-flex justify-content-center">
                                <div className="p-2"><Form.Check
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
                                    /></div>

                            </div>

                        </div>
                    </div>

                </div>

                <textarea className='feedback'>Agregue un comentario</textarea>
                <button className='buuton' onClick={feedback}>Enviar comentario</button>


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