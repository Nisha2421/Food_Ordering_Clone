import React, { useContext } from 'react'
import './PlaceOrder.css'
import { useOrderContext } from '../../context/OrderContext'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useOrderContext()
    const notify = (e) => {
      e.preventDefault()      
       toast.error("Sorry!!!! this feature is under development");
    }


  return (
    <form className='place-order'>
        <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Last name' />
        </div>
        <input type="email" placeholder='Email address' />
        <input type="text" placeholder='Street' />
         <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone' />
        </div>
        <div className="place-order-right">
 <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount()===0?0:50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount()===0?0:getTotalCartAmount()+50}</b>
            </div>
           
          </div>
           <button  onClick={(e) =>notify(e)}>PROCEED TO CHECKOUT</button>
        </div>
        </div>
    </form>
  )
}

export default PlaceOrder