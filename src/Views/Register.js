import { useState, useContext } from "react";
import { Context } from "../Store/appContext";
import { Link } from "react-router-dom";


const Register = () => {
    const {store, actions} = useContext(Context)
    const [user, setUser] = useState()
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

                                            <form onSubmit={actions.handleSubmitRegister}>
                                                <p>Crea a tu cuenta</p>
                                                <div className="form-outline mb-4">
                                                    <input onChange={actions.handleChangeRegister} name='full_name' type="text" id="form2Example11" className="form-control" required pattern="[a-z]{4,8}"  />
                                                    <label className="form-label" htmlFor="form2Example11">Nombre</label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input onChange={actions.handleChangeRegister} name='email' type="email" id="form2Example12" className="form-control" />
                                                    <label className="form-label" htmlFor="form2Example12">Email</label>
                                                </div>

                                                <div className="form-outline mb-4">
                                                    <input onChange={actions.handleChangeRegister} name='password' type="password" id="form2Example22" className="form-control" />
                                                    <label className="form-label" htmlFor="form2Example22">Password</label>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 mx-3" type="submit">Entrar</button>
                                                </div>

                                            </form>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-3">Ya tienes cuenta?</p>
                                                    <Link to='/'><button type="button" className="btn btn-outline-success">Inicia sesion!</button></Link>
                                                </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex p-3">
                                        <img src="https://images.unsplash.com/photo-1567521464027-f127ff144326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" />
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

export default Register;