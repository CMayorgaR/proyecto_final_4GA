import Navbar from "./Navbar";

const CreateMenu = () => {
  return (
    <>
      <Navbar title= "Crear menú:" />
      <div className="vista-color container-fluid d-flex justify-content-between">
        <form className= "flex-column mb-3 forms">
            <label className="form-label">Entrada:
            </label>
            <input type= "text" className="form-control" rows="2" placeholder="Añadir entrada" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
        </form>
        <form className= "flex-column mb-3 forms">
            <label className="form-label">Plato de fondo:
            </label>
            <input type= "text" className="form-control" rows="2" placeholder="Añadir plato de fondo" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
        </form>
        <form className= "flex-column mb-3 forms">
            <label className="form-label">Ensalada:
            </label>
            <input type= "text" className="form-control" rows="2" placeholder="Añadir ensalada" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
        </form>
        <form className= "flex-column mb-3 forms">
            <label className="form-label">Postre:
            </label>
            <input type= "text" className="form-control" rows="2" placeholder="Añadir postre" />
            <br />
            <textarea className="form-control" rows="4" placeholder="Añadir descripción"></textarea>
            <br />
            <button className="btn btn-success float-end">+</button>
        </form>
      </div>
    </>
  );
};

export default CreateMenu;
