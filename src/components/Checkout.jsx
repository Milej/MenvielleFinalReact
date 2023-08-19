import React from 'react'
import Input from './Input'
import { Link } from "react-router-dom"

const Checkout = () => {
  return (
    <form className='flex bg-zinc-100 p-10  shadow-sm'>
      <div className='container bg-white rounded-sm shadow-sm'>
        <div className="border-b border-zinc-200 p-5">
          <h6 className="text-lg font-semibold">
            Datos para el envío
          </h6>
        </div>
        <div className='p-5'>
          <div className='grid grid-cols-2 gap-10'>
            <Input text="Nombre" type="text" id="nombre" />
            <Input text="Apellido" type="text" id="apellido" />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input text="Provincia" type="text" id="provincia" />
            <Input text="Localidad" type="text" id="localidad" />
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <Input text="Dirección" type="text" id="direccion" />
            <Input text="Código Postal" type="text" id="cp" />
          </div>
        </div>
      </div>

      <div className='container flex flex-col bg-white rounded-md max-w-xs mx-4 shadow-sm'>
        <div className="border-b border-zinc-200 p-5">
          <h6 className="text-lg font-semibold">
            Datos de la tarjeta
          </h6>
        </div>
        <div className="p-5">
          <Input text="Nombre en la tarjeta" type="text" id="cardName" />
          <Input text="Número de la tarjeta" type="text" id="cardNumber" />
          <div className='grid grid-cols-2 gap-2'>
            <Input text="Fecha vencimiento" type="text" id="cardDate" />
            <Input text="CVC" type="text" id="cardCode" />
          </div>
        </div>
      </div>

      <div className="container flex flex-col bg-white rounded-md max-w-xs mx-4 shadow-sm">
        <div className="border-b border-zinc-200 p-5">
          <h6 className="text-lg font-semibold">
            Vas a pagar
          </h6>
        </div>
        <div className="p-5">
          <div className="flex justify-between text-sm pb-2">
            <p>Productos</p>
            <p>0000</p>
          </div>
          <div className="flex justify-between text-sm pb-2">
            <p>Envio</p>
            <p>0000</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between text-sm pb-2">
            <p className="font-semibold text-xl">Total</p>
            <p className="font-semibold text-xl">$ 0.000</p>
          </div>
        </div>
        <div className="p-5">
          <button className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700">
            Finalizar compra
          </button>
          <Link to="/">
            <button type="button" className="text-center text-zinc-700 rounded-lg py-1 text-xs mb-2">
              Ver más productos
            </button>
          </Link>
        </div>
      </div>
    </form>
  )
}

export default Checkout