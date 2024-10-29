//Use state es una funcion que nos permite guardar y actualizar los datos del componente
import React, {useState} from "react";

//Componente Login
//Los componentes son bloques que se pueden reutilizar en la aplicacion
const Register: React.FC = () => {
    return (
        <div className="register-container">
            <h1>Registrarse</h1>
            <form>
                <div className="input">
                    <label htmlFor="usuario"> Usuario </label>
                    <input type="text" id="usuario" placeholder="Usuario" />
                </div>
                <div className="input">
                    <label htmlFor="password"> Contraseña </label>
                    <input type="password" id="password" placeholder="Contraseña" />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;