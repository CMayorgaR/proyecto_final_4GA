import { useContext } from 'react';
import { Context } from "../Store/appContext";
import CreateSaveStarters from "./CreateSaveStarters";
import CreateSaveMains from "./CreateSaveMains";
import CreateSaveSalads from "./CreateSavedSalads";
import CreateSaveDesserts from "./CreateSaveDesserts";


const CreateMenu = () => {
  const { store } = useContext(Context);                                          
  return (
    <>
      <div className="view-color container-fluid">
        <div className="justify-content-between row">
          <CreateSaveStarters title="Entrada" ruta="http://localhost:8080/starter" initialDate={store?.saved_date} />
          <CreateSaveMains title="Plato de Fondo" ruta="http://localhost:8080/main" initialDate={store?.saved_date} />
          <CreateSaveSalads title="Ensalada" ruta="http://localhost:8080/salad" initialDate={store?.saved_date} />
          <CreateSaveDesserts title="Postre" ruta="http://localhost:8080/dessert" initialDate={store?.saved_date} />
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
