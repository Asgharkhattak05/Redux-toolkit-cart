import React from 'react'
import { useSelector } from 'react-redux';

const Price = () => {
    const { amount, cartItems } = useSelector((store) => store.cart);

    
  return (
    <>
        {cartItems.map((data)=>{
              return(
                <p key={data.id}>{data.price }</p>
              )
        })}
    </>
  )
}

export default Price