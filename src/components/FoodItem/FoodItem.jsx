import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { useOrderContext } from '../../context/OrderContext'

const FoodItem = ({id,name,price,description,image}) => {

  
   const {cartItem,addToCart,removeFromCart} = useOrderContext()
  return (
    <div className='food-item hover:translate-y-[-10px] transition-all duration-500 cursor-pointer'>
        <div className="food-item-img-container">
            <img src={image} alt="" className="food-item-image" />
            {
              !cartItem[id]
              ?<img onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" className="add transition-transform duration-300 ease-in-out transform hover:scale-105 bg-red cursor-pointer " />
              : <div className="food-item-counter">
                  <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                  <p>{cartItem[id]}</p>
                  <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
<div className="food-item-info">
    <div className="food-item-name-rating">
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
    </div>
    <p className="food-item-desc">{description}</p>
    <p className="food-item-price">₹{price}</p>
</div>

    </div>
  )
}

export default FoodItem