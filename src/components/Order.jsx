import { currencyFormatter } from "../utils/formatter"

const Order = ({ orders }) => {

  // useEffect(() => console.log(orders), [])

  return orders.map((order) => (
    <div className="col-span-1 border border-zinc-700 py-5 px-2">
      <div className="border-b border-zinc-300 pb-4">
        <h1 className="text-lg font-bold">Orden ID: {order.uid}</h1>
      </div>
      <p className="font-semibold py-2">Nombre completo: <span className="font-light">{`${order.buyer.lastname}, ${order.buyer.name}`}</span></p>
      <div className="py-2">
        <h1 className="text-xl font-semibold border-b border-zinc-300">Datos para el envio</h1>
        <p className="font-semibold">
          Provincia: <span className="font-light">{order.shipping.province}</span> <br />
          Localidad: <span className="font-light">{order.shipping.location}</span> <br />
          Domicilio: <span className="font-light">{order.shipping.direction}</span></p>
      </div>
      <div className="py-2">
        <h1 className="text-xl font-semibold border-b border-zinc-300">Datos para el cobro</h1>
        <p className="font-semibold">
          Nombre en la tarjeta: <span className="font-light">{order.cardInfo.cardName}</span> <br />
          Número de tarjeta: <span className="font-light">{order.cardInfo.cardNumber}</span> <br />
          Fecha de Vencimiento: <span className="font-light">{`${order.cardInfo.cardMonthDate}/${order.cardInfo.cardYearDate}`}</span> <br />
          Código de seguridad: <span className="font-light">{order.cardInfo.cardCode}</span></p>
      </div>
      <div className="py-2">
        <h1 className="text-xl font-semibold border-b border-zinc-300">Productos comprados</h1>
        <ul>
          {order.cartItems.map(element => (
            <ul>
              <li>Producto: {element.name}</li>
              <li>Cantidad: {element.quantity}</li>
              <li>Precio Unitario: {currencyFormatter(element.price)}</li>
              <li>Total: {currencyFormatter(element.price * element.quantity)}</li>
            </ul>
          ))
          }
        </ul>
      </div>
    </div>
  ))
}

export default Order