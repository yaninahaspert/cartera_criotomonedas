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
                className=" w-10/12 mx-auto my-20  text-center backdrop-blur-lg bg-white/30 mt-5 ">
                <thead className="bg-gray-400 text-black text-xl">
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
                        <p className="text-2xl text-black">{crypto_code}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-black">{crypto_amount}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-black">{money}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-black">{formatearFecha(datetime)}</p>
                    </td>
                    <td className="p-6 space-y-2">
                        <p className="text-2xl text-black">{action === "sale" ? "Venta" : "Compra"}</p>
                    </td>
                    <td>

                        <button type="button" className="w-10/12 text-sm bg-white/60 hover:bg-blue-500 text-blue-700 font-bold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
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
                                    className=" mb-3 w-10/12 text-sm bg-white/60 hover:bg-red-500 text-red-700 font-bold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
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