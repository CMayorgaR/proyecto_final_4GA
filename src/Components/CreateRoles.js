import Form from 'react-bootstrap/Form';
import { useEffect, useContext } from "react";
import { Context } from "../Store/appContext";


function CreateRoles() {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getUser();
    }, []);

//     function cargarLista() {
//     var request = new XMLHttpRequest();
//     request.open("GET", "localhost:8080/get_deliver", true);
//     request.onload = function() {
//         const deliverers = request.response.deliverers;
//           if (200 === request.status) {
//               for (let deliver in deliverers) {
//                   document.getElementById("lista")


//               }
//           } else {
//               console.log("Error coneguiendo repartidores!")
//           }
//     };

//     request.send();
// }


    function saveRole() {
        
        const email = document.getElementById("email").value;
        const is_deliver = document.getElementById("Repartidor").checked;
        console.log(email,is_deliver)
        var request = new XMLHttpRequest();
        request.open("POST", "localhost:8080/set_deliver", true);
        request.send(JSON.stringify({
            "email": email,
            "is_deliver": is_deliver
        }));

        console.log('entrooooooooooo');
    }

    return (
        <>
            <Form onSubmit={saveRole}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ingresar correo</Form.Label>
                    <ul className="list-group text-start">
                {store.saved_user.map((item, index) => {
                    return (
                        <li className="list-group-item" key={index}>{item.email} </li>
                    )
                })}
            </ul>




                    <Form.Control type="email" placeholder="Ej: maria1@gmail.com" required id='email' />

                    <Form.Check
                        inline
                        type='radio'
                        id='Repartidor'
                        class='default-radio'
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