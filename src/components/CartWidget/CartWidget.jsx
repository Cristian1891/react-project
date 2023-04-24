import React from 'react'
import carrito from '../../assets/carrito.png';

export const CartWidget = () => {
  return (
    <div>
        <img src={carrito} className='w-8 h-8'/>
        <span className='text-white'>0</span>
    </div>
  )
}

