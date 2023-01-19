import React from 'react';
import {useEffect, useState} from "react";
import Operacion from "./Operacion.jsx";
import Spinner from "./Spinner.jsx";

const Historial = () => {
    const [resultado, setResultado] = useState([])
    const [cargando, setCargando] = useState(false)


    useEffect(() => {

        const usuarioLS = localStorage.getItem("usuario") ?? "";

        let obtenerCompras = async () => {
            setCargando(true)

            const respuesta = await fetch(`https://laboratorio3-f36a.restdb.io/rest/transactions?q={"user_id": "${usuarioLS}"}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '60eb09146661365596af552f'
                }
            })
            const algo = await respuesta.json()
            setResultado(algo)
            setCargando(false)



        }
        obtenerCompras()
    }, [])


    return (
        <div
            className=" text-center text-white text-4xl">
            <p className="font-bold font-black mt-5">Historial</p>
            <div className="flex justify-center justify-items-center mt-14">
                {cargando && <Spinner/>}
            </div>

            {resultado && (
                <>
                    {resultado.map(compra => (
                        <Operacion
                            compra={compra}
                            key={compra._id}/>
                    ))}
                </>

            )}

        </div>
    )
}

export default Historial;
