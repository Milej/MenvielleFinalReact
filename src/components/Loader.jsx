import { CircularProgress } from '@mui/material'
import React from 'react'

const Loader = () => {
  return (
    <div className='grid place-content-center min-h-screen'>
        <CircularProgress/>
    </div>
  )
}

export default Loader