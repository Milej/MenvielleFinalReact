import { useContext, useEffect, useState } from 'react'
import Input from './Input'
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext'
import { currencyFormatter } from '../utils/formatter'
import validator from 'validator'
import { toast } from 'react-toastify'
import { collection, addDoc } from "firebase/firestore"
import { db } from "../services/firebase/firebase"

const Checkout = () => {

  const { cart, onReset, cartItems, total, shipping } = useContext(CartContext);
  const [totalProduct, setTotalProduct] = useState(0)

  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")

  const [province, setProvince] = useState("")
  const [location, setLocation] = useState("")
  const [direction, setDirection] = useState("")
  const [pc, setPc] = useState("")

  const [cardName, setCardName] = useState("")
  const [cardNumber, setCardNumber] = useState("")
  const [cardMonthDate, setCardMonthDate] = useState("")
  const [cardYearDate, setCardYearDate] = useState("")
  const [cardCode, setCardCode] = useState("")

  useEffect(() => {
    setTotalProduct(cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0))
  }, [])

  const handleSubmit = (e) => {

    e.preventDefault()

    validator.isEmpty(name)
    validator.isEmpty(lastname)

    validator.isEmpty(province)
    validator.isEmpty(location)
    validator.isEmpty(direction)
    validator.isEmpty(pc)

    validator.isEmpty(cardName)
    validator.isEmpty(cardNumber)
    validator.isEmpty(cardMonthDate)
    validator.isEmpty(cardYearDate)
    validator.isEmpty(cardCode)

    if (name && lastname && province && location && direction && pc && cardName && cardNumber && cardMonthDate && cardYearDate && cardCode) {

      const orderInfo = {
        "buyer": { name, lastname },
        "cartItems": [...cart],
        "shipping": { province, location, direction, pc },
        "cardInfo": { cardName, cardNumber, cardMonthDate, cardYearDate, cardCode }
      }

      const ordersCollection = collection(db, "orders")

      addDoc(ordersCollection, orderInfo)
        .then(({ id }) => {
          toast.success(`${name} Gracias por tu compra. El ID de tu compra es ${id}`, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          e.target.reset()
          onReset()
          setTotalProduct(0)
        })
    } else {
      console.warn("Debes completar los campos");
    }
  }

  return (
    <form className='flex bg-zinc-100 p-10 shadow-sm' onSubmit={handleSubmit}>
      <div className='container bg-white rounded-sm shadow-sm'>
        <div className="border-b border-zinc-200 p-5">
          <h6 className="text-lg font-semibold">
            Datos para el envío
          </h6>
        </div>
        <div className='p-5'>
          <div className='grid grid-cols-2 gap-10'>
            <Input text="Nombre" type="text" id="nombre" handleOnChange={setName} />
            <Input text="Apellido" type="text" id="apellido" handleOnChange={setLastname} />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input text="Provincia" type="text" id="provincia" handleOnChange={setProvince} />
            <Input text="Localidad" type="text" id="localidad" handleOnChange={setLocation} />
          </div>
          <div className='grid grid-cols-2 gap-10'>
            <Input text="Dirección" type="text" id="direction" handleOnChange={setDirection} />
            <Input text="Código Postal" type="text" id="pc" handleOnChange={setPc} />
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
          <Input text="Nombre en la tarjeta" type="text" id="cardName" handleOnChange={setCardName} />
          <Input text="Número de la tarjeta" type="text" id="cardNumber" handleOnChange={setCardNumber} />
          <div className='grid grid-cols-3 gap-2'>
            <Input text="Mes Vto." type="number" id="cardMonthDate" handleOnChange={setCardMonthDate} />
            <Input text="Año Vto." type="number" id="cardYearDate" handleOnChange={setCardYearDate} />
            <Input text="CVC" type="text" id="cardCode" handleOnChange={setCardCode} />
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
            <p>Productos ({cartItems})</p>
            <p>{currencyFormatter(totalProduct)}</p>
          </div>
          <div className="flex justify-between text-sm pb-2">
            <p>Envio</p>
            <p>{currencyFormatter(shipping)}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex justify-between text-sm pb-2">
            <p className="font-semibold text-xl">Total</p>
            <p className="font-semibold text-xl">{currencyFormatter(total)}</p>
          </div>
        </div>
        <div className="p-5">
          <button type='submit' className="block w-full text-center border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700 disabled:bg-gray-200 disabled:hover:text-zinc-700 disabled:hover:cursor-not-allowed">
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