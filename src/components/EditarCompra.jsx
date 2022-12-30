import {actualizarCompra, agregarCompra, obtenerCompra, obtenerCompras} from "../data/endpoints.jsx";
 import {Form, redirect, useActionData, useLoaderData} from "react-router-dom";
import Formulario from "./Formulario.jsx";
import Mensaje from "./Mensaje.jsx";

export async function loader ({params}){

const compra= await obtenerCompra(params.compraId)
    if(Object.values(compra).length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'El Cliente no fue encontrado'
        })
    }
    return compra;
}
export async function action({request,params}) {

    const formData = await request.formData()
    const datos = Object.fromEntries(formData)


    const errores = []
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios")
    }
    if (Object.keys(errores).length) {
        return errores;
    }

    await actualizarCompra(params.compraId, datos)
    return redirect("/historial")
}


const EditarCompra = () => {
    const errores = useActionData()
    const compra = useLoaderData()
    console.log(compra)

    return(
        <div>
            <div
                className="mbox-content w-1/2 backdrop-blur-lg bg-white/30 rounded-2xl mx-auto my-20 max-h-full text-center  text-white text-4xl">
                <p className="font-bold font-black">Editar Compra</p>
                {errores?.length && errores.map((error, i) => <Mensaje key={i}>{error}</Mensaje>)}

                <Form
                    method="post"
                    noValidate

                    className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Formulario compra={compra}/>

                </Form>
            </div>

        </div>
    )
}

export default EditarCompra;