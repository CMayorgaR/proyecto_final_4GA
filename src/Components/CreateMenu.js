import CreateSaveStarters from "./CreateSaveStarters";
import CreateSaveMains from "./CreateSaveMains";
import CreateSaveSalads from "./CreateSavedSalads";
import CreateSaveDesserts from "./CreateSaveDesserts";


const CreateMenu = () => {
  return (
    <>
      <div className="view-color container-fluid">
        <div className="justify-content-between row">
          <CreateSaveStarters title="Entrada" ruta="http://127.0.0.1:5000/starter" />
          <CreateSaveMains title="Plato de Fondo" ruta="http://127.0.0.1:5000/main" />
          <CreateSaveSalads title="Ensalada" ruta="http://127.0.0.1:5000/salad" />
          <CreateSaveDesserts title="Postre" ruta="http://127.0.0.1:5000/dessert" />
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
