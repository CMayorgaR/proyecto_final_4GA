import { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";


const ResetPass = () => {
    // const {store, actions} = useContext(Context)
    // const [user, setUser] = useState()
    return (
        <div className="container">
            <section className="h-100 gradient-form" style={{ backgroundColor: 'eee' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <Link to='/'><h4 className="mt-1 mb-5 pb-1">MasterMenu</h4></Link>
                                            </div>
                                            <form>
                                                <p>Cambio de contraseña</p>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example11" className="form-control" />
                                                    <label className="form-label" for="form2Example11">Antigua contraseña</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example12" className="form-control" />
                                                    <label className="form-label" for="form2Example12">Nueva contraseña</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input type="password" id="form2Example13" className="form-control" />
                                                    <label className="form-label" for="form2Example13">Repite nueva contraseña</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-3" type="button">Cambiar</button>
                                                </div>

                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ResetPass;