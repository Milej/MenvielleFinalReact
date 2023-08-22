import { useState } from 'react'
import Input from './Input'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../services/firebase/firebase'
import validator from 'validator'

const SignUp = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    validator.isEmail(email)
    validator.isEmpty(password)

    if (email && password) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          console.log(user)
          navigate("/dashboard")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        })
    }else{
      console.warn("Debes revisar los campos");
    }
  }

  return (
    <div className='container mx-auto grid place-content-center'>
      <h1 className='my-12 text-2xl text-center'>Crear cuenta</h1>
      <form className='grid w-96 gap-10' onSubmit={handleSubmit}>
        <Input text="Correo electrónico" type="email" id="email" handleOnChange={setEmail} />
        <Input text="Contraseña" type="password" id="password" handleOnChange={setPassword} />
        <button type='submit' className='block w-full border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700'>Registrarme</button>
        <p className='text-sm text-zinc-400 text-center'>Al registrarte aceptas nuestros terminos de condiciones y políticas de privacidad</p>
      </form>
    </div>
  )
}

export default SignUp