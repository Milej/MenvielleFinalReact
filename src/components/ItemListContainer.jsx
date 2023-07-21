import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div className='container grid-cols-none mx-auto px-4'>
      <h1 className='self-center'>{greeting}</h1>
    </div>
  )
}

export default ItemListContainer