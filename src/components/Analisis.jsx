import React, {useEffect, useState} from 'react';
import {obtenerPrecioBtc, obtenerPrecioEth, obtenerPrecioUsdt} from "../data/endpoints.jsx";
import Spinner2 from "./Spinner2.jsx";

const Analisis = () => {
    const [cantidadBitcoin, setCantidadBitcoin] = useState(0)
    const [cantidadEtherum, setCantidadEtherum] = useState(0)
    const [cantidadUSDT, setCantidadUSDT] = useState(0)

    const [dineroBitcoin, setDineroBitcoin] = useState(0)
    const [dineroEtherum, setDineroEtherum] = useState(0)
    const [dineroUSDT, setDineroUSDT] = useState(0)

    const [gananciaBitcoin, setGananciaBitcoin] = useState(0)
    const [gananciaEtherum, setGananciaEtherum] = useState(0)
    const [gananciaUSDT, setGananciaUSDT] = useState(0)

    const [cargando, setCargando] = useState(false)


    useEffect(() => {
        let establecerEstadoFinanciero = async () => {
            setCargando(true)

            const transaccionesResponse = await fetch(import.meta.env.VITE_API_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-apikey': '60eb09146661365596af552f'
                }
            })

            const balance = calcularBalance(await transaccionesResponse.json())
            calcularBalanceFinanciero(balance)
            setCargando(false)
        }
        establecerEstadoFinanciero()
    }, [])

    const calcularBalance = (transacciones) => {
        const bitconCompra = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "Bitcoin")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)

        const bitconVenta = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "Bitcoin")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)
        const restaCantidadBitcoin = bitconCompra - bitconVenta
        setCantidadBitcoin(restaCantidadBitcoin.toFixed(2))

        const etherumCompra = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "Ethereum")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)

        const etherumVenta = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "Ethereum")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)
        const restaCantidadEtherum = etherumCompra - etherumVenta
        setCantidadEtherum(restaCantidadEtherum.toFixed(2))

        const usdtCompra = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "USDT")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)

        const usdtVenta = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "USDT")
            .map(elemento => Number(elemento.crypto_amount)).reduce((a, b) => a + b, 0)
        const restaCantidadUsdt = usdtCompra - usdtVenta
        setCantidadUSDT(restaCantidadUsdt.toFixed(2))

//----------------------
        const usdtCompraMoney = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "USDT")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)

        const usdtVentaMoney = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "USDT")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)
        const restaCantidadUsdtMoney = (usdtCompraMoney - usdtVentaMoney).toFixed(2)

        const bitcoinCompraMoney = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "Bitcoin")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)

        const bitcoinVentaMoney = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "Bitcoin")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)
        const restaCantidadBitcoinMoney = (bitcoinCompraMoney - bitcoinVentaMoney).toFixed(2)

        const ethereumCompraMoney = transacciones.filter(x => x.action === "purchase").filter(x => x.crypto_code === "Ethereum")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)

        const ethereumVentaMoney = transacciones.filter(x => x.action === "sale").filter(x => x.crypto_code === "Ethereum")
            .map(elemento => Number(elemento.money)).reduce((a, b) => a + b, 0)
        const restaCantidadEthereumMoney = (ethereumCompraMoney - ethereumVentaMoney).toFixed(2)


        return {
            bitcoin: restaCantidadBitcoin,
            ethereum: restaCantidadEtherum,
            usdt: restaCantidadUsdt,
            usdtMoney: restaCantidadUsdtMoney,
            bitcoinMoney: restaCantidadBitcoinMoney,
            ethereumMoney: restaCantidadEthereumMoney
        }
    }
    let calcularBalanceFinanciero = async (balance) => {
        const respuestaPrecioBitcoin = await obtenerPrecioBtc()
        const dineroDisponibleBitcoin = respuestaPrecioBitcoin.totalBid * balance.bitcoin
        setDineroBitcoin(dineroDisponibleBitcoin.toFixed(2))

        const respuestaPrecioEtherum = await obtenerPrecioEth()
        const dineroDisponibleEtherum = respuestaPrecioEtherum.totalBid * balance.ethereum
        setDineroEtherum(dineroDisponibleEtherum.toFixed(2))

        const respuestaPrecioUSDT = await obtenerPrecioUsdt()
        const dineroDisponibleUSDT = respuestaPrecioUSDT.totalBid * balance.usdt
        setDineroUSDT(dineroDisponibleUSDT.toFixed(2))
//------------
        const gananciaBTN=(dineroDisponibleBitcoin-balance.bitcoinMoney).toFixed(2)
        setGananciaBitcoin(gananciaBTN)

        const gananciaUSDT=(dineroDisponibleUSDT-balance.usdtMoney).toFixed(2)
        setGananciaUSDT(gananciaUSDT)

        const gananciaETH=(dineroDisponibleEtherum-balance.ethereumMoney).toFixed(2)
        setGananciaEtherum(gananciaETH)




    }


    return (
        <div className="my-">
            {cargando ? (<Spinner2/>) :
                (
                    <>
                        <table
                            className="w-h-120 mbox-content w-1/2 shadow-md  mx-auto my-20 rounded-md text-center backdrop-blur-lg bg-white/30 shadow mt-5 table-auto">
                            <thead className="bg-gray-400 text-white text-md">
                            <tr>
                                <th className="p-2">TIPO DE CRIPTOMONEDA</th>
                                <th className="p-2">CANTIDAD </th>
                                <th className="p-2">DINERO ACTUAL</th>
                            </tr>

                            </thead>
                            <tbody className="text-2xl">

                            <tr>
                                <td>BITCOIN</td>
                                <td>{cantidadBitcoin}</td>
                                <td>{dineroBitcoin}</td>
                            </tr>
                            <tr>
                                <td>ETHERUM</td>
                                <td>{cantidadEtherum}</td>
                                <td>{dineroEtherum}</td>
                            </tr>
                            <tr>
                                <td>USDT</td>
                                <td>{cantidadUSDT}</td>
                                <td>{dineroUSDT}</td>
                            </tr>

                            </tbody>
                        </table>
                        <table
                            className="w-h-120 mbox-content w-1/2  mx-auto my-20  text-center backdrop-blur-lg bg-white/30 shadow mt-5 table-auto">
                            <thead className="bg-gray-400 text-white text-md">
                            <tr>
                                <th className="p-2">TIPO DE CRIPTOMONEDA</th>
                                <th className="p-2">GANANCIAS/PÉRDIDAS</th>
                            </tr>
                            </thead>
                            <tbody className="text-2xl">

                            <tr className={gananciaBitcoin>=0? "bg-green-400": "bg-red-700"}>
                                <td>BITCOIN</td>
                                <td>{gananciaBitcoin}</td>

                            </tr>
                            <tr className={gananciaUSDT>=0? "bg-green-400": "bg-red-700"}>
                                <td>USDT</td>
                                <td>{gananciaUSDT}</td>
                            </tr>
                            <tr className={gananciaEtherum>=0? "bg-green-400": "bg-red-700"}>
                                <td>ETHERUM</td>
                                <td>{gananciaEtherum}</td>
                            </tr>
                            </tbody>
                        </table>
                    </>
                )
            }
        </div>
    )
}

export default Analisis;