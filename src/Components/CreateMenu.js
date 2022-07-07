import Navbar from "./Navbar";
import { useContext } from "react";
import { Context } from "../Store/appContext";


const CreateMenu = () => {
  //const {actions , store } = useContext(Context); 
  return (
    <>
      <div className="vista-color container-fluid">
        <div className="d-flex justify-content-between">
          <form className="flex-column mb-3 forms">
            <label className="form-label">Entrada:
            </label>
            <input type="text" className="form-control" rows="2" placeholder="Añadir entrada" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
          </form>
          <form className="flex-column mb-3 forms">
            <label className="form-label">Plato de fondo:
            </label>
            <input type="text" className="form-control" rows="2" placeholder="Añadir plato de fondo" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
          </form>
          <form className="flex-column mb-3 forms">
            <label className="form-label">Ensalada:
            </label>
            <input type="text" className="form-control" rows="2" placeholder="Añadir ensalada" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
          </form>
          <form className="flex-column mb-3 forms">
            <label className="form-label">Postre:
            </label>
            <input type="text" className="form-control" rows="2" placeholder="Añadir postre" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
          </form>
        </div>
        <div className="container-fluid justify-content-center lista navbar-text">
          <p class="text-center">Elementos guardados:</p>
          <ul className="list-group">
            <li className="list-group-item">Un elemento de la lista</li>
            <li className="list-group-item">Otro elemento de la lista</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
