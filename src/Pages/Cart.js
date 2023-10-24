import React, {useState, useEffect, useContext} from 'react'
import CartCard from '../Components/Cart/CartCard'
import YourOrder from '../Components/Cart/YourOrder'
import { CartContext } from '../Contextapi/AppContext'
import CartProvider from '../Contextapi/AppContext';
import { LocalStorageService } from '../Services/LocalStorageService';
import { useNavigate } from 'react-router-dom';
import WelcomeModal from '../Modal/Login/WelcomeModal';

const Cart = () => {

  const { CartData, RemoveOneElementFromCart, CartUpdate, PlusMinusHanlder, cartTotalUpdate, addCart_update } = useContext(CartContext)
  const [cartTotal, setcartTotal] = useState(0)
  // const [welcomeModal, setWelcomeModal] = useState(false);
   
  // const WelcomeModalHandler = () => {
  //   setWelcomeModal(!welcomeModal);
  // };

  const OutofStockRemovedProduct = (data)=>{
    LocalStorageService.setItem('new_cart',data);
    cartTotalUpdate(data)

  }
  useEffect(()=>{  
    var cart_data = LocalStorageService.getItem("new_cart");
    cartTotalUpdate(cart_data);
    // ScrolltoTop()

   
},[])

//TODO Checkout Api

//TODO Coupon Hanlder

//TODO 


const AddandMinusBtnHandler = (name, image, price, id, action) => {
  // console.log(name, image, price, id, action, 'from Handler')
  PlusMinusHanlder(name, image, price, id, action)

}

const userType = LocalStorageService.getItem('userType')
  return (
   <>
   {CartData?.length === 0  ?
       <EmptyCart /> : 

       <div className=' md:p-10 w-full md:flex gap-10 relative'>
     <div className='w-full max-md:p-5 md:w-1/2 space-y-3'>
          <p className=' font-bold  uppercase'>Products</p>
          <hr className='' />
          {
            CartData && CartData.map((values, index)=>{
              return  <CartCard key={index} {...values} btnHandler={AddandMinusBtnHandler}   />

            })
          }
     </div>
     <div className='w-full  md:w-1/2'>
           <YourOrder  OutofStockHandler={OutofStockRemovedProduct} />
     </div>
     <img src="/assets/images/groupleaf.png" className='absolute -left-2 -top-3 max-md:hidden' alt="" />
   </div>
  }
   

   </>
  )
}

export default Cart


const EmptyCart = () =>{
  const navigate = useNavigate()

  return(
    <>
      <div className='flex flex-col justify-center items-center my-20 max-md:px-2 space-y-4'>
        <img src="/assets/images/cart.png" className='h-32 md:h-48' alt="" />
        <p className='font-bold text-2xl md:text-4xl max-md:text-center'>Your cart is currently empty.</p>
        <div className='text-[#777777] space-y-2 font-bold text-sm'>
        <p className='text-center max-md:text-sm'>Before proceed to checkout you must add some products to your shopping cart.</p>
        <p className='text-center max-md:text-sm'>You will find a lot of interesting products on our "Shop" page.</p>
        </div>
        <button onClick={()=>navigate('/shop')} className='bg-primary py-2 px-6 text-white capitalize font-semibold '>Return to shop</button>
      </div>
    
    </>
  )
}