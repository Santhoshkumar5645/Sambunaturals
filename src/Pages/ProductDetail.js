import React, { useState,useContext, useEffect } from "react";
import FaqItem from "../Components/Shop/FaqItem";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {CartContext} from '../Contextapi/AppContext'
import { NotificationService } from "../Service/NotificationService";
import useFetchData from '../CustomHooks/useFetchData';
import { LocalStorageService } from "../Services/LocalStorageService";
import SuggestedProducts from "../Components/ProductDetail/SuggestedProducts";
import { ScrolltoTop } from "../Utility";


const ProductDetail = (props) => {
  const [addWishlist, setAddWishlist] = useState(false)
  const [productDetailData, setProductDetailData] = useState()
  const [addItem, setAddItem] = useState(false)
   const [count, setcount] = useState(0)
   const [suggestProducts, setSuggestedProducts] = useState()
  let location = useLocation();

  const [main, setMain] = useState();
  
  const { id, out_of_stock, attribute_id  } = location.state
  
  useEffect(() => {
  
    productDetail(id)
    ScrolltoTop()
}, [])

const { loading, makeRequest } = useFetchData();

const { addCart, CartData, cartTotalUpdate, addCart_update } = useContext(CartContext)

     const AddCartSection = (name, product_image,attribute_id,quantity, price, id, action) => {

          addCart(name, product_image,attribute_id,quantity, price, id, action);

     }

     useEffect(() => {
          setAddItem(CartData.some(CartData => CartData.id === id))

          if (CartData.some(CartData => CartData.id === id)) {
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


const productDetail = async (id) => {
      
   const distribution_id =  LocalStorageService.getItem('Distribution_id') 
  const payload = {            
        "product_id": id,
         "distribution_center_id": distribution_id  === null ? "40586698a2a70120f52082d0495726e97b23b54cbabb226e99f336bbb893db07c565aa6292a353008e8eb9" : distribution_id
  }
  const Response = await makeRequest("/product-details", "post", payload);
  if (Response.status) {
    setMain(Response.data.product.product_images[0])
    setProductDetailData(Response.data.product)
    setSuggestedProducts(Response.data?.product_suggessions)
   
    }
 
};

const addToWishlist = async (id) => {
  //  const id =  localStorage.getItem('Distribution_id') 
  const payload = {     
        "product_id": id
  }

  const Response = await makeRequest("/user/product/add-to-wishlist", "post", payload);
  if (Response.status) {
    setAddWishlist(!addWishlist)
    NotificationService(Response.message, 'success', 'top-right')

    }
};

const removeFromWishlist = async (id) => {
 //  const id =  localStorage.getItem('Distribution_id') 
  const payload = {     
              "product_id": id
  }

  const Response = await makeRequest("/user/product/remove-wishlist", "post", payload);
  if (Response.status) {
    setAddWishlist(!addWishlist)
    NotificationService(Response.message, 'success', 'top-right')

    }

};


 const name = productDetailData && productDetailData.name
 const quantity = productDetailData && productDetailData.product_attributes[0].quantity
 const price = productDetailData && productDetailData.product_attributes[0].price
 const product_image = productDetailData && productDetailData.product_images[0]
 const discount_price = productDetailData && productDetailData.product_attributes[0].discount?.product_price_before_discount
 const discount_text = productDetailData && productDetailData.product_attributes[0].discount?.text


  return (
    <>
      {/* product detail  */}
      <div className="w-full mt-10 container mx-auto md:flex font-AVENIR">
        <div className="md:w-1/2 flex flex-col justify-center items-center  md:mx-10">
          <div className="flex md:border py-10 relative px-8 items-center w-full">
            {
              addWishlist ?   <img onClick={()=>removeFromWishlist(id)}  src="/assets/svg/wishlisttrue.svg" className="absolute top-3 left-3 h-5" alt="" />
  :
              <img onClick={()=>addToWishlist(id)}  src="/assets/svg/wishlist.svg" className="absolute top-3 left-3 h-5" alt="" />
            }
            
            <div className="w-10/12 flex-col items-center flex justify-center">   
              <img src={main} className="h-52 " alt="" />
              <p className="text-sm text-primary mt-5">
             {name}
          </p>
            </div>
            <div className="w-2/12 space-y-3">
              {productDetailData &&
                productDetailData.product_images.map((image, index) => {
                  return (
                    <img
                      src={image}
                      alt="image"
                      key={index}
                      className={`${
                        image === main && main
                          ? " p-3   rounded-md shadow-xl "
                          : 'p-3   rounded-md shadow-md'
                      }  `}
                      onClick={() => setMain(image)}
                    />
                  );
                })}
               
            </div>
          </div>
          
        </div>
        <div className="md:w-1/2 space-y-4 max-md:px-5">
          <p className="text-2xl">{name}</p>
          {/* <p className="text-sm">(Pack of 3 Items)</p> */}
          <p className="text-sm font-semibold my-2">{quantity}</p>
          <div className="flex items-center  gap-3">
            <p className="text-2xl text-primary">Rs. {price}</p>
            <del className="text-red-500">{discount_price}</del>
            <p className="text-xs text-primary">{discount_text}</p>
             <img src="/assets/svg/pricetag.svg" className="h-4" alt="" />
          </div>
          {/* <p className="text-sm my-5">
            <span className="text-primary "> How to Use :</span> Dip the filter
            bag in 120ml Hot Water for 1-2 minutes and your Greens Soup is
            ready. Best to consume 2-3 servings per day.
          </p> */}

<div className={`${out_of_stock ?  'bg-red-500': 'bg-primary' } bg-primary w-fit font-AVENIR my-2 px-5  py-2 text-sm text-white rounded-md`}>
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
          {/* <button onClick={(()=>AddCartSection(name,product_image, price, id ))} className="bg-primary text-white py-2 px-6 text-sm rounded-sm">
            Add to Cart
          </button> */}
          {/* <div className="text-sm mt-5">
            
          </div> */}
          <p className="text-sm  py-5">
          <p className="mb-3 flex items-center gap-2">Product Info
          <img src="/assets/svg/info.svg" className="h-3" alt="" /></p>
           {productDetailData && productDetailData.description}
          </p>
        </div>


        
      </div>
      

      {/* details  */}
      {/* <p className="text-center my-5 mt-10 text-2xl font-bold">
        “Formulated by <span className="text-primary"> Scientists</span>,
        Recommended by <span className="text-primary">Nutritionist</span> “
      </p>
      <p className="text-primary text-center font-AVENIR my-5">Ingredients</p>
      <div className="container mx-auto md:flex font-AVENIR ">
        <div className="w-full md:w-1/2 flex max-md:flex-col-reverse justify-center max-md:text-center text-right items-center max-md:mt-4 md:gap-5">
          <div className="w-5/6 md:w-4/6 space-y-1   md:space-y-2">
            <p className="font-bold text-xl">Balloon vine spinach Leaves</p>
            <p className="text-sm">
              Contains bioactive component like phytosterols that shown to have
              good anti-inflammatory properties
            </p>
          </div>
          <img src="/assets/images/leafes.png" className="h-16" alt="" />
        </div>

        <div className="w-full md:w-1/2 flex max-md:flex-col-reverse justify-center items-center max-md:text-center text-right max-md:mt-4 md:gap-5">
          <div className="w-5/6 md:w-4/6 space-y-1   md:space-y-2">
            <p className="font-bold text-xl">Amla</p>
            <p className="text-sm ">
              100gm Amla has Vitamin C equal to 20 oranges.This is important for
              maintaining a healthy immune system
            </p>
          </div>
          <img src="/assets/images/amla.png" className="h-16" alt="" />
        </div>
      </div>

      <div className="container mx-auto md:flex font-AVENIR md:my-10 ">
        <div className="md:w-1/2 flex  max-md:flex-col-reverse justify-center items-center max-md:text-center text-right max-md:mt-4 md:gap-5">
          <div className="w-5/6 md:w-4/6 space-y-1   md:space-y-2">
            <p className="font-bold text-xl">Pepper</p>
            <p className="text-sm">
              Contains bioactive component like phytosterols that shown to have
              good anti-inflammatory properties
            </p>
          </div>
          <img src="/assets/images/pepper.png" className="h-16" alt="" />
        </div>

        <div className="md:w-1/2 flex max-md:flex-col-reverse items-center justify-center max-md:text-center text-right max-md:mt-4 md:gap-5">
          <div className="w-5/6 md:w-4/6 space-y-1   md:space-y-2">
            <p className="font-bold text-xl">Cumin</p>
            <p className="text-sm ">
              100gm Amla has Vitamin C equal to 20 oranges.This is important for
              maintaining a healthy immune system
            </p>
          </div>
          <img src="/assets/images/cumin.png" className="h-16" alt="" />
        </div>
      </div> */}

      {/* faq  */}
      {/* <p className="text-2xl max-md:mt-5 text-center">FAQ’<span className="text-primary">s</span></p>
      <div className="max-md:mx-3">
      <div className="w-full mt-5 mb-10   md:container  md:mx-auto  font-AVENIR border-primary border">
        <FaqItem />
        <FaqItem />
        <FaqItem />
      </div>
      </div> */}

     
    <SuggestedProducts data={suggestProducts && suggestProducts} />
       
    </>
  );
};

export default ProductDetail;
