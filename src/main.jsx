import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Compra from "./components/Compra.jsx";
import Layout from "./components/Layout.jsx";
import Historial from "./components/Historial.jsx";
import Analisis from "./components/Analisis.jsx";
import EditarCompra,{loader as loaderEditar} from "./components/EditarCompra";
import Operacion from "./components/Operacion.jsx"
import {action as eliminarAction} from "./components/Operacion.jsx";
import Bienvenida from "./components/Bienvenida.jsx";



const router=createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element:<Bienvenida/>,
            },
            {
                path: "/historial",
                element: <Historial/>,
            },
            {
                path: "/compra",
                element: <Compra/>,
            },
            {
                path:"/compra/:compraId/editar",
                element:<EditarCompra/>,
                loader: loaderEditar
            },
            {
                path:"/compra/:compraId/eliminar",
                action: eliminarAction
            },
            {
                path: "/analisis",
                element: <Analisis/>,
            },
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

