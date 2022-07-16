import Dropdown from 'react-bootstrap/Dropdown';
import ListGroup from 'react-bootstrap/ListGroup';

function CreateProfileDelivery() {

  const arrayActivities = [
    {
      id: 1,
      activities: 'Verificar si el Usuario retiro el Menú seleccionado'
    },
    {
      id: 2,
      activities: 'Verificar si coinside el Menú retirado versus el seleccionado'
    },
    {
      id: 3,
      activities: 'Llevar el control de la cantidad de Menú a prepar diariamente'
    },
    {
      id: 4,
      activities: 'Revisar el calendario'
    },
    {
      id: 5,
      activities: 'Agregar los Menú Semanalmente'
    },
    {
      id: 6,
      activities: 'Crear Perfiles'
    }
  ];

  function saveProfile(e){
    console.log('entrooo ',e.target.value)
  }

  return (
    <>
    <form onSubmit={(event)=>saveProfile(event)}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Seleccione un perfil
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Admin</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Repartidor</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Usuario</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <ListGroup>
        {
          arrayActivities.map(activities => {
            return (<ListGroup.Item>{activities.activities}
              <input type="radio" value={activities.id} id={activities.id}
                name={activities.id} />
            </ListGroup.Item>
          )})
        }

      </ListGroup>
      <button type="submit">Guardar selecciones</button>
      </form>
    </>
  );
}

export default CreateProfileDelivery;