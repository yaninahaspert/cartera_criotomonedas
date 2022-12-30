export let obtenerCompras = async() => {

    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '60eb09146661365596af552f'
        }
    })
    return await respuesta.json()
}

export let obtenerCompra = async(id) => {

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL2}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '60eb09146661365596af552f'
        }
    })
    return await respuesta.json()
}

export async function agregarCompra(datos) {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL2, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': '60eb09146661365596af552f'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCompra(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL2}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json',
                'x-apikey': '60eb09146661365596af552f'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
export async function eliminarCompra(id) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL2}/${id}`, {
            method: 'DELETE',
            headers: {
                'x-apikey': '60eb09146661365596af552f'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}
