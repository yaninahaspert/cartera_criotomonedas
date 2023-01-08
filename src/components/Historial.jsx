import React from 'react';
import {useEffect, useState} from "react";
import Operacion from "./Operacion.jsx";
import Spinner from "./Spinner.jsx";

const Historial = () => {
    const [resultado, setResultado] = useState([])
    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        let obtenerCompras = async () => {
            setCargando(true)

            const respuesta = await fetch(import.meta.env.VITE_API_URL, {
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
            <p className="font-bold font-black">Historial</p>
            <div className="flex justify-center justify-items-center mt-14">
                {cargando && <Spinner/>}
            </div>

            {resultado ? (
                <>
                    {resultado.map(compra => (
                        <Operacion
                            compra={compra}
                            key={compra._id}/>
                    ))}
                </>

            ) : (
                <div className="text-center mt-10 text-black">No hay ningún cliente registrado</div>
            )}

        </div>
    )
}

export default Historial;
