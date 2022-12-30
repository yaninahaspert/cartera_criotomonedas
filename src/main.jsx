import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './index.css'
import Compra, {action as actionCompra} from "./components/Compra.jsx";
import Venta from "./components/Venta.jsx";
import Layout from "./components/Layout.jsx";
import Historial, {loader as loaderCompra} from "./components/Historial.jsx";
import Analisis from "./components/Analisis.jsx";
import EditarCompra, {loader as loaderEditarCompra, action as actionEditarCompra}  from "./components/EditarCompra";
import {action as eliminarAction} from "./components/Operacion.jsx"

const router=createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element:<Analisis/>,
            },
            {
                path: "/historial",
                element: <Historial/>,
                loader: loaderCompra

            },
            {
                path: "/venta",
                element: <Venta/>,
            },
            {
                path: "/compra",
                element: <Compra/>,
                action: actionCompra
            },
            {
                path:"/compra/:compraId/editar",
                element:<EditarCompra/>,
                loader: loaderEditarCompra,
                action: actionEditarCompra
            },
            {
                path:"/compra/:compraId/eliminar",
                action: eliminarAction
            },



        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)

