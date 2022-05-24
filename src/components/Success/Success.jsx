import React, { useContext } from 'react'
import { CartContext } from '../store/CartContext';

const Success = () => {

    const { order } = useContext(CartContext);
  return (
    <h1>Your order ID is: {order}</h1>
  )
}

export default Success