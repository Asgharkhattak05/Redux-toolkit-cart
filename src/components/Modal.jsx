import React from 'react'
import { useDispatch } from 'react-redux'
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from '../features/modal/ModalSlice';


const Modal = () => {
  const dispatch =useDispatch()

 const  handleConfirm=()=>{
  dispatch(clearCart())
  dispatch(closeModal())
 }

 const handleCancel=()=>{
  dispatch(closeModal())
 }

   return (
    <aside className='modal-container'>
        <div className="modal">
            <h4>remove all items from your shoping cart?</h4>
            <div className="btn-container">
                <button type="button" onClick={handleConfirm} className='btn confirm-btn'>Confirm</button>
                <button type="button" onClick={handleCancel} className='btn clear-btn'>Cancel</button>
            </div>
        </div>
    </aside>
  )
}

export default Modal