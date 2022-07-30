import CreateSaveStarters from "./CreateSaveStarters";
import CreateSaveMains from "./CreateSaveMains";
import CreateSaveSalads from "./CreateSavedSalads";
import CreateSaveDesserts from "./CreateSaveDesserts";


const CreateMenu = () => {
  return (
    <>
      <div className="view-color container-fluid">
        <div className="justify-content-between row">
          <CreateSaveStarters title="Entrada" ruta="http://localhost:8080/starter" />
          <CreateSaveMains title="Plato de Fondo" ruta="http://localhost:8080/main" />
          <CreateSaveSalads title="Ensalada" ruta="http://localhost:8080/salad" />
          <CreateSaveDesserts title="Postre" ruta="http://localhost:8080/dessert" />
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
