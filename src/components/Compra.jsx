import {useState} from "react";
import Mensaje from "./Mensaje.jsx";
import {Form, redirect, useActionData} from "react-router-dom";
import {agregarCompra} from "../data/endpoints.jsx";
import Formulario from "./Formulario.jsx";


export async function action({request}) {

    const formData = await request.formData()
    const datos = Object.fromEntries(formData)


    const errores = []
    if (Object.values(datos).includes("")) {
        errores.push("Todos los campos son obligatorios")
    }
    if (Object.keys(errores).length) {
        return errores;
    }

    await agregarCompra(datos)
    return redirect("/historial")
}

const Compra = () => {

    const errores = useActionData()

    return (
        <div
            className="mbox-content w-1/2 backdrop-blur-lg bg-white/30 rounded-2xl mx-auto my-20 max-h-full text-center  text-white text-4xl">
            <p className="font-bold font-black">Compra</p>
            {errores?.length && errores.map((error, i) => <Mensaje key={i}>{error}</Mensaje>)}

            <Form
                method="post"
                noValidate

                className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Formulario/>

            </Form>
        </div>

    );

}

export default Compra;