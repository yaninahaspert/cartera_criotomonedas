import React from 'react';
import {useLoaderData} from "react-router-dom";
import {obtenerCompras,} from "../data/endpoints.jsx";
import Operacion from "./Operacion.jsx";

export function loader() {
    return obtenerCompras();
}

const Historial = () => {
    const compras = useLoaderData()


    return(
        <div
            className=" text-center text-white text-4xl">
            <p className="font-bold font-black">Historial</p>

            {compras.length ? (
                <div>
                {compras.map(compra => (
                        <Operacion
                            compra={compra}
                            key={compra._id}/>
                    ))}
                </div>

            ) : (
                <p className="text-center mt-10">No hay ningún cliente registrado</p>
            )}

        </div>
    )
}

export default Historial;
