import Formulario from "./Formulario.jsx";
import {obtenerCompra} from "../data/endpoints.jsx";
import {useLoaderData} from "react-router-dom";
import compra from "./Compra.jsx";

export async function loader({params}) {
    return await obtenerCompra(params.compraId);
}

const EditarCompra =  () => {

    const  compraAEditar=useLoaderData()

    return (
        <div>
            <div
                className="mbox-content w-1/2 backdrop-blur-lg bg-white/30 rounded-2xl mx-auto my-20 max-h-full text-center  text-white text-4xl">
                <p className="font-bold font-black">Editar Compra</p>
                <div
                    className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Formulario  compraAEditar={compraAEditar}
                    key={compraAEditar._id}/>

                </div>
            </div>

        </div>
    )
}

export default EditarCompra;