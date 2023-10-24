import React, { useEffect, useState } from 'react'
import ProductCard from '../Shop/ProductCard'
import axios from 'axios';
import WishlistProductCard from './WishlistProductCard';
import { LocalStorageService } from '../../Services/LocalStorageService';
import useFetchData from "../../CustomHooks/useFetchData";
import { NotificationService } from "../../Service/NotificationService";



function Wishlist() {
    const [favouritesData, setFavoritesData] = useState()

    const { loading, makeRequest } = useFetchData();


  useEffect(()=>{
     wishlistData()
  }, [])

  const wishlistData = async () => {
    
    const Response = await makeRequest("/user/product/wishlist", "post", {});
    if (Response.status) {
      setFavoritesData(Response && Response.data.products)
  
    }
   
  };
  return (
    <>
      <p className='capitalize tracking-wider  font-extrabold text-xl text-primary'>Wishlist</p>
       
    
       {favouritesData?.length === 0 ?  <div className="flex justify-center mt-10 items-center flex-col space-y-3 font-AVENIR">
        <img src="/assets/images/emptyfooter.png" className="h-60" alt="" />

        <p className="font-semibold">No Favorites Added</p>
        <p>You have not added any favorites yet</p>
       </div> :
       <div className='grid grid-cols-2 md:grid-cols-3 mt-5 gap-8'>
     { favouritesData && favouritesData.map((values)=>{
            return(
               <WishlistProductCard  remove={wishlistData} {...values}
               
               />
               )
          })}
           </div>
        }
   
    </>
  )
}

export default Wishlist