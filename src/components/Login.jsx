import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Mensaje from "./Mensaje.jsx";

const Login = ({nombre, guardarNombre,setnombre,logged, pasarUsuario, setLogged}) => {
    const navigate = useNavigate();
    const [alerta, setAlerta] = useState("")

    const handleRegistrarse=(e)=>{
        e.preventDefault()
        if (nombre==="") {
            setAlerta("El usuario es obligatorio")
            setTimeout(() => {
                setAlerta("")
            }, 3000)
        }else{
            guardarNombre(nombre)
            setLogged(true)
            navigate("/historial")

        }

    }
    const handleSalir=()=>{
        setLogged(false)
        setnombre("")
        navigate("/")
    }
    const usuarioLs = localStorage.getItem("usuario") ?? "";

    return(
        <>
            <div
                className=" mx-2 py-5 mbox-content backdrop-blur-lg bg-white/30 rounded-md mx-auto max-h-full text-center text-white text-md">
                {logged===true ? (
                    <div>
                    <p className="mb-2">Accediste con el usuario <span className="font-bold text-xl">{usuarioLs} </span></p>
                    <button className=" w-24 bg-black p-2 rounded-md font-bold" type="button" onClick={handleSalir}>Salir</button>
                    </div>
                    )
                :
                    (
                <form onSubmit={handleRegistrarse}>
                <p> Ingresá tu usuario:</p>
                <input
                    className="text-black my-3 text-center rounded-sm"
                    name="nombre"
                    id="nombre"
                    type="text"
                    placeholder="Usuario"
                    value={nombre}
                    onChange={e => setnombre(e.target.value)}/>
                    <div>

                    <button className=" w-24 bg-black p-2 rounded-md font-bold" type="submit">Registrarse</button>
                    </div>
                    {alerta && <Mensaje mensaje={alerta}/>}
                </form>
                    )}
            </div>
            </>
    )
};

export default Login;