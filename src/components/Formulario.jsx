import React, {useEffect, useState} from 'react';
import {agregarCompra} from "../data/endpoints.jsx";
import {useNavigate} from "react-router-dom";
import Spinner2 from "./Spinner2.jsx";
import Mensaje from "./Mensaje.jsx";

const Formulario = ({compraAEditar}) => {

    const navigate = useNavigate();
    const [cargando, setCargando] = useState(false)
    const [mensaje, setMensaje] = useState("")

    const [crypto_code, setCrypto_code] = useState("")
    const [money, setMoney] = useState(0)
    const [crypto_amount, setCrypto_amount] = useState(0)
    const [datetime, setDatatime] = useState("")
    const [action, setAction] = useState("")
    const [user_id, setUser_Id] = useState(localStorage.getItem("usuario") ?? "")
    const [_id, set_id] = useState("")

    const objetoCompra = async (compras) => {

        await agregarCompra(compras)

        navigate("/historial")
    }
    useEffect(() => {
        if (compraAEditar) {
            setMoney(compraAEditar.money)
            setAction(compraAEditar.action)
            setDatatime(compraAEditar.datetime)
            setUser_Id(compraAEditar.user_id)
            setCrypto_code(compraAEditar.crypto_code)
            setCrypto_amount(compraAEditar.crypto_amount)
            set_id(compraAEditar._id)
        }
    }, []);


    const handlesubmit = (e) => {
        e.preventDefault()
        if ([crypto_code, crypto_amount, money, datetime, action].includes("")) {
            setMensaje("Todos los campos son obligatorios")
            setTimeout(() => {
                setMensaje("")
            }, 3000)
            return
        }
        if (compraAEditar) {
            setCargando(true)
            objetoCompra({crypto_amount, crypto_code, money, user_id, datetime, action, _id})
        } else {
            setCargando(true)
            objetoCompra({crypto_amount, crypto_code, money, user_id, datetime, action})
        }
    }

    return (
        <>
            <form onSubmit={handlesubmit}
                  className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {mensaje && <Mensaje mensaje={mensaje}/>}
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Operación </label>
                    <select
                        className="text-2xl text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={action}
                        onChange={e => setAction(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="purchase">Compra</option>
                        <option value="sale">Venta</option>

                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Tipo de Criptomoneda
                    </label>
                    <select
                        className="text-2xl text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={crypto_code}
                        onChange={e => setCrypto_code(e.target.value)}>
                        <option value="">--Seleccione--</option>
                        <option value="Bitcoin">Bitcoin</option>
                        <option value="USDT">USDT</option>
                        <option value="Ethereum">Ethereum</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Cantidad Comprada
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Cantidad comprada"
                        value={crypto_amount}
                        onChange={e => setCrypto_amount(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Fecha y Hora
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="datetime"
                        placeholder="xx-xx-xx xx:xx"
                        onChange={e => setDatatime(e.target.value)}
                        value={datetime}/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Valor Pagado
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Valor pagado"
                        value={money}
                        onChange={e => setMoney(e.target.value)}

                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="hidden"
                        name="user_id"
                        value={user_id}
                        onChange={e => setUser_Id(e.target.value)}

                    />
                </div>
                {cargando && <div className="modal justify-items-center"><Spinner2/></div>}

                <div className="flex items-center justify-center">
                    <button
                        className="bg-teal-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Guardar
                    </button>
                </div>
            </form>
        </>
    )
}
export default Formulario;