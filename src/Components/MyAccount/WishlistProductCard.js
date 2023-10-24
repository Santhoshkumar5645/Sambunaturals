import React, {useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import useFetchData from '../../CustomHooks/useFetchData';
import { NotificationService } from '../../Service/NotificationService';
import { CartContext } from '../../Contextapi/AppContext';

const WishlistProductCard = (props) => {
  const [addItem, setAddItem] = useState(false);
  const [count, setcount] = useState(0);
    const {name , product_images, product_attributes ,id, remove ,out_of_stock  } = props && props
    const navigate = useNavigate()

    

    const { loading, makeRequest } = useFetchData();

    const product_image = product_images[0] && product_images[0];
    const price = product_attributes && product_attributes[0]?.price;
    const quantity = product_attributes && product_attributes[0]?.quantity;
  
    const attribute_id =product_attributes && product_attributes[0]?.id;


    const removeFromWishlist = async (id) => {
      const payload = {      
            "product_id": id
      }

     const Response = await makeRequest("/user/product/remove-wishlist", "post", payload);
    if (Response.status) {
      NotificationService(Response.message, 'success', 'top-right')
      props.remove()
      // setFeedbackData(Response.data);
    }
    
      
    };
  const removeWish = (id)=>{
     removeFromWishlist(id)
    
  }
  
  const { addCart, CartData, cartTotalUpdate, addCart_update } =useContext(CartContext);


  const AddCartSection = (
    name, product_image,  attribute_id, quantity, price, id, action
  ) => {
    addCart(name, product_image, attribute_id, quantity, price, id, action);
  };

  useEffect(() => {
    setAddItem(CartData?.some((CartData) => CartData.id === id));

    if (CartData?.some((CartData) => CartData.id === id)) {
      let index = CartData.findIndex((CartData) => CartData.id === id);
      setcount(CartData[index].count);
    } else {
      setAddItem(false);

      setcount(0);
    }
  }, [CartData]);
  const itemHandler = (action) => {
    AddCartSection(
      name,
      product_image,
      attribute_id,
      quantity,
      price,
      id,
      action
    );
  };

 

  return (
    <>
      <div  className='w-auto  h-auto max-md:mx-auto max-md:px-2 pb-4  container  relative flex flex-col justify-center items-center bg-white rounded-md shadow-xl'>
             <img src="/assets/svg/wishlistremove.svg" onClick={()=>removeWish(id)} className='cursor-pointer absolute right-0 top-0 h-12' alt="" />
            <div className='group flex justify-center'>
            
            <div className='bg-[#FFB2BF80] w-32 md:w-48 lg:w-52 xl:w-60 h-12 md:h-20 group-hover:h-32 group-hover:md:h-40 group-hover:transition-all group-hover:duration-500 hover:delay-75  absolute top-10 rounded-lg '>
            </div>
            
            <img src={product_images[0] && product_images[0]} className='w-28 md:w-36 absolute top-12 md:top-16 ' alt="" />

            </div>
            <div className='mt-44 md:mt-52 flex justify-center flex-col space-y-1 md:space-y-2'>
                <p className='text-center max-md:text-sm text-black font-AVENIR'>{name}</p>
                <div className='flex gap-4 items-center justify-center mt-2'>
               
                </div>
            </div>
            {/* <div
        className={`${
          out_of_stock ? "bg-red-500" : "bg-primary"
        } bg-primary font-AVENIR my-2 px-5  py-2 text-sm text-white rounded-md`}
      >
        {addItem ? (
          <div className="flex justify-around gap-5 items-center ">
            <p
              onClick={() => itemHandler("minus")}
              className="cursor-pointer font-semibold"
            >
              -
            </p>
            <p>{count}</p>
            <p
              onClick={() => itemHandler("add")}
              className="cursor-pointer font-semibold"
            >
              +
            </p>
          </div>
        ) : (
          <>
            {out_of_stock ? (
              <button className="bg-red-500  text-white">Out of Stock</button>
            ) : (
              <button onClick={() => itemHandler("add")} className="">
                Add to Cart
              </button>
            )}
          </>
        )}

      </div> */}

         </div>
    </>
  )
}

export default WishlistProductCard