import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className='grid w-full py-5 place-content-center bg-zinc-700'>
      <NavLink to="/login" className="border border-white text-white rounded-lg px-5 py-2 hover:text-white hover:bg-zinc-700">Panel de control</NavLink>
    </div>
  )
}

export default Footer