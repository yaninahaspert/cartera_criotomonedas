import React from 'react';
import imagen from "../assets/imagen.jpg"
import imagen2 from "../assets/imagen2.jpg"
import {Outlet, Link, useLocation} from "react-router-dom";


const Layout = () => {
    const location=useLocation()

    return(
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-gray-700">
                <h2 className="text-4xl font-black text-center text-teal-400 mt-5 drop-shadow(0 2px 2px rgb(50 20 50 / 0.06))">
                    Cartera de Criptomonedas
                </h2>
                <nav className="mt-10 px-5 py-10">
                    <Link
                        className={`${location.pathname === "/" ?  "text-white font-bold" : "text-teal-400" } text-2xl block mt-2 hover:text-green-200`}
                        to="/">Analisis del estado actual</Link>
                    <Link
                        className={`${location.pathname === "/compra" ?  "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                        to="/compra">Compra</Link>
                    <Link
                        className={`${location.pathname === "/venta" ?  "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                        to="/venta">Venta</Link>
                    <Link
                        className={`${location.pathname === "/historial" ?  "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                        to="/historial">Historial</Link>


                </nav>
                <img src={imagen} alt="imagen criptomoneda" className="p-5"/>

            </aside>

            <main className="md:w-3/4 md:h-screen overflow-scroll bg-" style={{ backgroundImage: `url(${imagen2})` }}>

                <Outlet/>
            </main>


        </div>
    )
}

export default Layout;