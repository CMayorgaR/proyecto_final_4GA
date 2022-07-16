import Form from 'react-bootstrap/Form';


function CreateRoles() {
    function saveRole() {
        console.log('entrooooooooooo');
    }
    

    

    return (
        <>
            <Form onSubmit={saveRole}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresar correo</Form.Label>
                    <Form.Control type="email" placeholder="Ej: maria1@gmail.com" required />
                    <Form.Check
                        inline
                        type='radio'
                        id='Repartidor default-radio'
                        label='Repartidor'
                        name='roles'

                    />
                    <Form.Check
                        inline
                        type='radio'
                        id='Usuario default-radio'
                        label='Usuario'
                        name='roles'

                    />
                </Form.Group>
                <button variant="success" type="submit">Guardar</button>
            </Form>

            <section>
                <tr>Repartidor</tr>
                <input type="text" name="" id="">
                </input>
                <input type="text" name="" id=""></input>
            </section>

        </>
    );





}

export default CreateRoles;