import React from 'react';

const Venta = () => {
    return(
        <div
            className="mbox-content w-1/2 backdrop-blur-lg bg-white/30 rounded-2xl mx-auto my-20 max-h-full text-center  text-white text-4xl">
            <p className="font-bold font-black">Venta</p>
            <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Tipo de Criptomoneda
                    </label>
                    <select className="text-2xl text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option className="text-gray-700" value="">--Seleccione--</option>
                        <option value="bitcon">Bitcoin</option>
                        <option value="usdt">USDT</option>
                        <option value="ethereum">Ethereum</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Cantidad Vendida
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Cantidad comprada"/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Fecha
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Fecha"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Hora
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Hora"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Valor Cobrado
                    </label>
                    <input
                        className="text-2xl shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text" placeholder="Valor pagado"/>
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-teal-400 hover:bg-green-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Guardar
                    </button>

                </div>
            </form>
        </div>
    );
}

export default Venta;