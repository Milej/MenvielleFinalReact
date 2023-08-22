import { useContext, useEffect, useState } from 'react'
import Input from './Input'
import { NavLink, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebase/firebase'
import validator from 'validator'
import { UserContext } from '../context/UserContext';

const Login = () => {

  const { logged, setLogged } = useContext(UserContext)

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    logged && navigate("/dashboard")
  }, [logged])

  const handleSubmit = async (e) => {
    e.preventDefault()

    validator.isEmail(email)
    validator.isEmpty(password)

    if (email && password) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

          const user = userCredential.user;
          user && setLogged(true)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
        });
    } else {
      console.warn("Debes revisar los campos");
    }
  }

  return (
    <div className='container mx-auto grid place-content-center'>
      <h1 className='my-12 text-2xl text-center'>Iniciar sesión</h1>
      <form className='grid w-96 gap-10' onSubmit={handleSubmit}>
        <Input text="Correo electrónico" type="email" id="email" handleOnChange={setEmail} />
        <Input text="Contraseña" type="password" id="password" handleOnChange={setPassword} />
        <button type='submit' className='block w-full border border-zinc-700 text-zinc-700 rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700'>Iniciar sesión</button>
        <p className='text-sm text-zinc-400'>Aún no tienes una cuenta? Registrate haciendo click <NavLink to="/signup" className="text-blue-600 underline">aquí</NavLink></p>
      </form>
    </div>
  )
}

export default Login