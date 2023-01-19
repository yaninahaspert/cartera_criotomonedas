import React, {useEffect, useState} from 'react';
import imagen from "../assets/bitcoin-removebg-preview(1).png"
import imagen3 from "../assets/6807.webp"
import {Outlet, Link, useLocation, redirect} from "react-router-dom";
import Login from "./Login.jsx";


const Layout = () => {
    const [nombre, setNombre] = useState(localStorage.getItem("usuario") ?? "")
    const [usuario, setUsuario]=useState("")
    const [logged, setLogged] = useState(false)
    const location = useLocation()

    useEffect(() => {
        localStorage.setItem("usuario", nombre ?? "")
    }, [nombre])

    useEffect(() => {
        const usuarioLs = localStorage.getItem("usuario") ?? "";
        if (usuarioLs !== "") {
            setLogged(true)
        }
            setUsuario(usuarioLs)

    }, [])

    const guardarNombre = (nuevoNombre) => {
        setNombre(nuevoNombre);
        console.log(nombre)

    };


    return (
        <div className="md:flex md:min-h-screen">
            <aside className="md:w-1/4 bg-gray-700">
                <h2 className=" mb-5 text-4xl font-black text-center text-teal-400 mt-5 drop-shadow(0 2px 2px rgb(50 20 50 / 0.06))">
                    Cartera de Criptomonedas
                </h2>
                {logged &&
                    <nav className=" px-5 py-10">
                        <Link
                            className={`${location.pathname === "/analisis" ? "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                            to="/analisis">Analisis del estado actual</Link>
                        <Link
                            className={`${location.pathname === "/compra" ? "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                            to="/compra">Compra/Venta</Link>

                        <Link
                            className={`${location.pathname === "/historial" ? "text-white font-bold" : "text-teal-400"} text-2xl block mt-2 hover:text-green-200`}
                            to="/historial">Historial</Link>
                    </nav>
                }

                <Login
                        logged={logged}
                        setLogged={setLogged}
                        usuario={setUsuario}
                        nombre={nombre} guardarNombre={guardarNombre}
                        setnombre={setNombre}>
                    </Login>


                <img src={imagen} alt="imagen criptomoneda" className=""/>

            </aside>

            <main className="md:w-3/4 md:h-screen overflow-scroll bg- " style={{backgroundImage: `url(${imagen3})`}}>

                <Outlet/>
            </main>


        </div>
    )
}

export default Layout;