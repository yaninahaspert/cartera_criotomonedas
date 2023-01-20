

export let obtenerCompras = async () => {

    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'x-apikey': '60eb09146661365596af552f'
        }
    })
    return await respuesta.json()
}

export let obtenerCompra = async (id) => {

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

export let obtenerPrecioBtc = async (proveedor) => {
    console.log(proveedor)
    const respuestaBtc = await fetch(`https://criptoya.com/api/${proveedor}/btc/ars`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return await respuestaBtc.json()
}
export let obtenerPrecioEth = async () => {

    const respuestaEth = await fetch(import.meta.env.VITE_API_ETH, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return await respuestaEth.json()
}
export let obtenerPrecioUsdt = async () => {

    const respuestaUsdt = await fetch(import.meta.env.VITE_API_USDT, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    return await respuestaUsdt.json()
}