import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function CreateRoles() {
    function saveRole(){
        console.log('entrooooooooooo');
    }
    return (
        <>
            <Form onSubmit={saveRole}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresar correo</Form.Label>
                    <Form.Control type="email" placeholder="Ej: maria1@gmail.com" required/>
                    <Form.Check
                        inline
                        type='radio'
                        id='default-radio'
                        label='Repartidor'
                        name='roles'
                        id='repartidor'
                    />
                    <Form.Check
                        inline
                        type='radio'
                        id='default-radio'
                        label='Usuario'
                        name='roles'
                        id='usuario'
                    />
                </Form.Group>
                <Button variant="success" type="submit">Guardar</Button>
            </Form>
        </>
    );



}

export default CreateRoles;