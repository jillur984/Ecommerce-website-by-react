import React from 'react'
import CartCount from './cart/CartCount'
import CardEmpty from './cart/CartEmpty'
import CartItem from './cart/CartItem'

const Cart = () => {
  return (
   <>
   <div className='fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]'>
    <div className={`blur-effect-theme h-screen max-w-xl w-full absolute right-0`}>
        <CartCount/>
        <CardEmpty/>
        <CartItem/>
    </div>
   </div>
   </>
  )
}

export default Cart