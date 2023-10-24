import React, { useEffect, useState, useContext } from 'react'
import ReactDOM from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contextapi/AppContext'

const SuggestedProductCard = (props) => {


const [addItem, setAddItem] = useState(false)
const [count, setcount] = useState(0)
const [stock, setStock] = useState(false)
const { name, product_attributes, product_images, id, out_of_stock } = props && props

// if(out_of_stock && out_of_stock){
//      setStock(!stock)
// }
const discount_text = product_attributes[0].discount && product_attributes[0].discount.text

const product_image = product_images[0] && product_images[0]
const discount_price = product_attributes[0].discount && product_attributes[0].discount.product_price_before_discount

const price = product_attributes[0] && product_attributes[0].price
const quantity = product_attributes[0] && product_attributes[0].quantity

const attribute_id = product_attributes[0].id
// const current_stock =  product_attributes[0].out_of_stock
// if(current_stock){
//      setStock(true)
// }
const navigate = useNavigate()

const { addCart, CartData, cartTotalUpdate, addCart_update } = useContext(CartContext)
const AddCartSection = (name, product_image,attribute_id,quantity, price, id, action) => {

     addCart(name, product_image,attribute_id,quantity, price, id, action);

}

useEffect(() => {
     setAddItem(CartData?.some(CartData => CartData.id === id))

     if (CartData?.some(CartData => CartData.id === id)) {
          let index = CartData.findIndex(CartData => CartData.id === id);
          setcount(CartData[index].count)
     } else {
          setAddItem(false)

          setcount(0)
     }

}, [CartData])


const itemHandler = (action) => {
     AddCartSection(name, product_image,attribute_id,quantity, price, id, action)
}

  return (
    <>
       <div className='  h-auto max-md:mx-auto max-md:px-2 pb-4 container  relative flex flex-col justify-center items-center bg-white rounded-md shadow-xl'>
               {discount_text &&
                    <div className='bg-primary absolute left-0 top-0 text-white text-[10px] font-AVENIR px-2 py-1 rounded-tl-lg'>{discount_text}</div>

               }
               <div onClick={() =>{ 
                navigate('/productdetail', { state: props })
                window.location.reload()
            }} className='group  cursor-pointer flex justify-center'>

                    <div className='md:bg-[#FFB2BF80] w-32 md:w-48 lg:w-52 xl:w-60 h-12 md:h-20 group-hover:h-32 group-hover:md:h-40 group-hover:transition-all group-hover:duration-500 hover:delay-75  absolute top-10 rounded-lg '>
                    </div>

                    <img src={product_image} className='w-28 md:w-36 md:absolute  max-md:mt-6 md:top-16 ' alt="" />

               </div>
               <div onClick={() =>{ 
                navigate('/productdetail', { state: props })
                window.location.reload()
            }} className='cursor-pointer  md:mt-52 flex justify-center flex-col space-y-1 md:space-y-2'>
                    <p className='text-center max-md:text-sm text-black mt-2 font-AVENIR'>{name}</p>
                    <p className='text-center max-md:text-sm text-black  font-AVENIR'>{quantity}</p>

                    <div className='flex gap-4 items-center justify-center md:mt-2'>
                        {discount_price && <del className='text-[#FF3482CC] max-md:text-md'>₹ {discount_price}</del> }
                         <p className='text-primary text-lg md:text-xl font-semibold'>Rs. {price}</p>
                    </div>
               </div>

               <div className={`${out_of_stock ?  'bg-red-500': 'bg-primary' } bg-primary font-AVENIR my-2 px-5  py-2 text-sm text-white rounded-md`}>
                    {addItem ?

                         <div className='flex justify-around gap-5 items-center '>
                              <p onClick={() => itemHandler('minus')} className='cursor-pointer font-semibold'>-</p>
                              <p>{count}</p>
                              <p onClick={() => itemHandler('add')} className='cursor-pointer font-semibold'>+</p>

                           
                         </div>
                         :
                         <>
                         {out_of_stock  ?
                         
                         <button className='bg-red-500  text-white'>Out of Stock</button> :
                         <button onClick={() =>itemHandler('add')} className=''>Add to Cart</button> 
                    }
                         </>

                    }

                    {/* { props.CartHandler(props.id, props.date,props.evtype,props.evtitle, props.price, '', props.topic) } */}

               </div>
          </div>
    </>
  )
}

export default SuggestedProductCard