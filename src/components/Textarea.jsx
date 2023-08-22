import React from 'react'

const Textarea = ({ text, type, id, handleOnChange }) => {

  return (
    <div className="relative z-0 w-full mb-6 group">
      <textarea type={type} id={id} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-700 peer" placeholder="" onChange={(e) => handleOnChange(e.target.value)}></textarea>
      <label htmlFor={id} className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:border-zinc-700 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{text}</label>
    </div >
  )
}

export default Textarea