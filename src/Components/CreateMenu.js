import NewEntry from "./NewEntry";

const CreateMenu = () => {
  return (
    <>
      <div className="vista-color container-fluid">
        <div className="d-flex justify-content-between">
         <NewEntry title="Entrada" ruta="http://127.0.0.1:5000/starter" />
         <NewEntry title="Plato de Fondo" ruta="http://127.0.0.1:5000/main"/>
         <NewEntry title="Ensalada" ruta="http://127.0.0.1:5000/salad" />
         <NewEntry title="Postre" ruta="http://127.0.0.1:5000/dessert"/>
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
