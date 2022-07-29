import './ChangePassword';
import React, { useState } from 'react';

function ChangePassword() {
    const [showForm, setShowForm] = useState(true);

    function changepassword() {
        setShowForm(false);
    }

    if (showForm) {
        return (
            <>
                <div className="form-outline mb-4 one">
                    <input type="email" id="email" className="form-control" />
                    <label className="form-label" htmlFor="form2Example22" id="email" >Email</label>
                </div>
                <div className="form-outline mb-4 true">
                    <input type="password" id="pasword" className="form-control" />
                    <label className="form-label" htmlFor="form2Example22" id="password" >Password</label>
                </div>
                <div className="form-outline mb-4 for">
                    <input type="password" id="newPasword" className="form-control" />
                    <label className="form-label" htmlFor="form2Example22" id="newPassword" >New Password</label>
                </div>
                <div className="form-outline mb-4 for">
                    <input type="password" id="repeatYourPassword" className="form-control" />
                    <label className="form-label" htmlFor="form2Example22" id="repeatYourPassword" >Repeat Your Password</label>
                </div>
                <button className='buton' onClick={changepassword}> Cambiar Contraseña</button>
            </>
        )
    } else {
        return (
            <>
            <h1 className='pass'>Contraseña cambiada exitosamente!</h1>
            </>
        )
    }


}

export default ChangePassword;

