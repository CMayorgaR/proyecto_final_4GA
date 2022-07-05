import Navbar from "./Navbar";

const CreateMenu = () => {
  return (
    <>
      <Navbar title= "Crear menú:" />
      <div className="vista-color container-fluid d-flex justify-content-between">
        <div className= "flex-column">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address
            </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <div className= "flex-column">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address
            </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <div className= "flex-column">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address
            </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
        <div className= "flex-column">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address
            </label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea
            </label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMenu;
