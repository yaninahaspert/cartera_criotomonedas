import React, {useState} from 'react';
import {Form, redirect, useNavigate} from "react-router-dom";
import {eliminarCompra} from "../data/endpoints.jsx";
import Spinner2 from "./Spinner2.jsx";

export async function action({params}){
    await eliminarCompra(params.compraId)
    window.location.reload("/historial");


}



const Operacion = ({compra}) => {
    const navigate=useNavigate()

    const [cargando, setCargando] = useState(false)

    const {datetime, crypto_code, crypto_amount, money, action, _id} = compra

    const formatearFecha = datetime => {
        const fechaNueva = new Date(datetime);
        const opciones = {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit"
        }
        return fechaNueva.toLocaleDateString('es-ES', opciones)
    }


    return (
        <div>
            {cargando ? (
                <div className="flex justify-center">
                  <Spinner2/>
                </div>)
                :(

            <table
                className="w-h-120 mbox-content w-1/2  rounded-2xl mx-auto my-20  text-center backdrop-blur-lg bg-white/30 shadow mt-5 table-auto">
                <thead className="bg-gray-400 text-white text-2xl">
                <tr>
                    <th className="p-2">TIPO</th>
                    <th className="p-2">CANTIDAD</th>
                    <th className="p-2">VALOR</th>
                    <th className="p-2">FECHA</th>
                    <th className="p-2">OPERACIÓN</th>
                    <th className="p-2">ACCIONES</th>
                </tr>
                </thead>
                <tbody>
                <tr className="border-b">
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{crypto_code}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{crypto_amount}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{money}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{formatearFecha(datetime)}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-gray-800">{action === "sale" ? "Venta" : "Compra"}</p>
                    </td>
                    <td>

                        <button type="button" className="text-blue-600 hover:text-blue-700 uppercase font-bold text-2xl"
                                onClick={() => navigate(`/compra/${_id}/editar`)}
                        >
                            Editar
                        </button>
                        <Form
                            method="post"
                            action={`/compra/${_id}/eliminar`}
                            onSubmit={(e) => {
                                setCargando(true)
                                if (!confirm('¿Deseas eliminar este registro?')) {
                                    e.preventDefault()
                                }
                            }}>
                            <button type="submit"
                                    className="text-red-600 hover:text-red-700 uppercase font-bold text-2xl"
                            >
                                Eliminar
                            </button>
                        </Form>
                    </td>
                </tr>
                </tbody>
            </table>)}
        </div>
    )
};

export default Operacion;