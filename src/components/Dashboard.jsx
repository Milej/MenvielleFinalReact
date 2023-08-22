import { collection, addDoc } from "firebase/firestore"
import { useState } from "react"
import Input from "./Input"
import Textarea from "./Textarea"
import validator from "validator"
import { db } from "../services/firebase/firebase"
import { toast } from "react-toastify"

const Dashboard = () => {

  const [name, setName] = useState("")
  const [categoryId, setCategoryId] = useState("")
  const [categoryName, setCategoryName] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    validator.isEmpty(name)
    validator.isEmpty(categoryId)
    validator.isEmpty(categoryName)
    validator.isEmpty(description)
    validator.isEmpty(image)
    validator.isEmpty(price)
    validator.isEmpty(stock)

    if (name && categoryId && categoryName && description && image && price && stock) {

      const product = { name, categoryId, categoryName, description, image, price, stock }

      const productsCollection = collection(db, "products")

      addDoc(productsCollection, product)
        .then(({ id }) => console.log(`Producto creado con ID: ${id}`))
        .then(() => {
          toast.success(`${product.name} agregado a la base de datos`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          })
          e.target.reset()
        })
    } else {
      console.warn("Debes completar los campos");
    }
  }

  return (
    <div className='container mx-auto grid place-content-center'>
      <h1 className='my-12 text-2xl text-center'>Agregar producto</h1>
      <form className='grid w-96' onSubmit={handleSubmit}>
        <Input text="Nombre" type="text" id="name" handleOnChange={setName} />
        <Input text="ID Categoría" type="text" id="categoryId" handleOnChange={setCategoryId} />
        <Input text="Categoría" type="text" id="categoryName" handleOnChange={setCategoryName} />
        <Textarea text="Descripción" type="text" id="description" handleOnChange={setDescription} />
        <Input text="Imagen URL" type="text" id="image" handleOnChange={setImage} />
        <Input text="Precio" type="number" id="price" handleOnChange={setPrice} />
        <Input text="Stock" type="number" id="stock" handleOnChange={setStock} />
        <button type='submit' className='block w-full border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700'>
          Agregar producto
        </button>
      </form>
    </div>
  )
}

export default Dashboard