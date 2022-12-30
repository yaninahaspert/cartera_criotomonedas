import React from 'react';
import Spinner from "./Spinner.jsx";

const Formulario = ({compra}) => {

return(
    <>    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Tipo de Criptomoneda
        </label>
        <select
            className="text-2xl text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            defaultValue={compra?.crypto_code}>
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
            name="crypto_amount"
            defaultValue={compra?.crypto_amount}
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
            defaultValue={compra?.datetime}/>
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Valor Pagado
        </label>
        <input
            className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="money"
            placeholder="Valor pagado"
            defaultValue={compra?.money}
        />
    </div>
    {/*hidden*/}
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        </label>
        <input
            className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="hidden"
            name="user_id"
            defaultValue="yanina"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        </label>
        <input
            className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="hidden"
            name="action"
            defaultValue="purchase"
        />
    </div>
    <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        </label>
        <input
            className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="hidden"
            name="crypto_code"
            defaultValue={compra?.crypto_code}

        />
    </div>

    <div className="flex items-center justify-center">

        <button
            className="bg-teal-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit">
            Guardar
        </button>
    </div>
    </>
)}
export default Formulario;