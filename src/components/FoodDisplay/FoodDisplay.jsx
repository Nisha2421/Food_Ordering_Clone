import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { useOrderContext } from '../../context/OrderContext'

const FoodDisplay = ({category}) => {
    const {food_list} = useOrderContext()
  return (
    <div className='food-display ' id='food-display'>
       <h1 className=' flex justify-center itens-center text-3xl font-medium'>Top dishes near you</h1>
       <div className="food-display-list">
        {food_list.map((item,index)=>{
          if (category === "All" || category===item.category) {
             return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
           
        })}
       </div>
    </div>
  )
}

export default FoodDisplay